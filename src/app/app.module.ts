import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ModalComponent } from './components/modal/modal.component';
import {HttpClientModule} from "@angular/common/http";
import { SpinnerDiamondModule } from 'spinners-angular/spinner-diamond';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerDiamondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
