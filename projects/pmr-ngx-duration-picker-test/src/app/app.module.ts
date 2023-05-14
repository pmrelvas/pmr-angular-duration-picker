import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxPmrDurationPickerModule } from 'ngx-pmr-duration-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPmrDurationPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
