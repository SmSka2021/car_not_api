import {Component, HostListener, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CarService} from "./services/car.service";
import {CarData} from "./models/model";
import {Observable, Subscription} from "rxjs";
import {HttpService} from "./services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder,
              private carService: CarService,
              private httpService: HttpService) {}
  public carsData: CarData[] = this.carService.carsData;
  public carsData2: CarData[] = this.carService.carsData2;
  public openModal: Observable<boolean> = this.carService.getOpenModal();
  ngOnInit() {
    this.subscriptions.push(this.httpService.getData(this.category).subscribe((data: any) => {
      this.carsData = [...data];
    }))
  }
  public priceForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    car: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(40)]],
  })

  public goScroll(target: HTMLElement, car?: any): void {
   this.carService.goScroll(target);
    if (car) {
      this.priceForm.patchValue({car: car.name});
    }
  }
  public trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }

  public bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
  }
  public onSubmit(): void {
    if (this.priceForm.valid) {
      this.carService.setIsShowSpinner(true);
      this.httpService.sendRequest(this.priceForm.value).subscribe({
          next: (response: any) => {
            this.carService.setMessage(response.message);
            this.carService.setIsShowSpinner(false)
            this.priceForm.reset();
          },
          error: (response: any) => {
            this.carService.setMessage(response.error.message);
          }
        }
      )
      this.carService.setOpenModal(true);
      this.carService.isScroll('hidden');

    } else {
      return;
    }
  }
  get name() { return this.priceForm.get('name'); }

  get phone() { return this.priceForm.get('phone'); }

  get car() { return this.priceForm.get('car'); }
  public category: string = 'sport';
  public toggleCategory(category: string) {
    this.category = category;
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
