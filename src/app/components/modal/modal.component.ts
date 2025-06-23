import { Component } from '@angular/core';
import {CarService} from "../../services/car.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private carService: CarService) { }
  public message: Observable<string> = this.carService.getMessage$();

    public closeModal(): void {
    this.carService.setOpenModal(false);
    this.carService.setMessage('')
    this.carService.isScroll('');
  }
  public isShowSpinner$ = this.carService.getIsShowSpinner();
}
