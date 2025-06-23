import { Injectable } from '@angular/core';
import {CarData} from "../models/model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() { }
  private isShowSpinner$ = new BehaviorSubject<boolean>(false);
  public setIsShowSpinner(isShowSpinner: boolean) {
    this.isShowSpinner$.next(isShowSpinner);
  }
  public getIsShowSpinner(): Observable<boolean> {
    return this.isShowSpinner$.asObservable();
  }
  carsData: CarData[] = [{
    image:"assets/images/1.png",
    name:"Opel",
    engine:4,
    gear: "134",
    places:5,

  },
  {
    image:"assets/images/2.png",
    name:"Revolt",
    engine:7,
    gear: "932",
    places:4,

  },
  {
    image:"assets/images/3.png",
    name:"Audi",
    engine:7,
    gear: "833",
    places:6,

  },
  {
    image:"assets/images/4.png",
    name:"Lexus",
    engine:3,
    gear: "995",
    places:5,

  },
  {
    image:"assets/images/5.png",
    name:"Niva",
    engine:5,
    gear: "732",
    places:4,

  },
  {
    image:"assets/images/6.png",
    name:"Fiat",
    engine:4,
    gear: "632",
    places:5,

  },];

  carsData2: CarData[] = [

  {
    image:"assets/images/2.png",
    name:"Revolt",
    engine:7,
    gear: "932",
    places:4,

  },
  {
    image:"assets/images/1.png",
    name:"Opel",
    engine:4,
    gear: "134",
    places:5,

  },
  {
    image:"assets/images/6.png",
    name:"Fiat",
    engine:4,
    gear: "632",
    places:5,

  },
  {
    image:"assets/images/3.png",
    name:"Audi",
    engine:7,
    gear: "833",
    places:6,

  },


  {
    image:"assets/images/4.png",
    name:"Lexus",
    engine:3,
    gear: "995",
    places:5,

  },
  {
    image:"assets/images/5.png",
    name:"Niva",
    engine:5,
    gear: "732",
    places:4,

  },
 ];


  private message$ = new BehaviorSubject<string>('');
  public getMessage$(): Observable<string> {
    return this.message$.asObservable();
  }
  public getMessageValue(): string {
    return this.message$.getValue();
  }
  public setMessage(message: string) {
    this.message$.next(message);
  }
  public goScroll(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }
  private openModal$ = new BehaviorSubject<boolean>(false);
  public getOpenModal(): Observable<boolean> {
    return this.openModal$.asObservable();
  }
  public setOpenModal(open: boolean): void {
    this.openModal$.next(open);
  }
  public isScroll(item: string) {
    document.body.style.overflow = item;
  }
}



