import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxPmrDurationPickerModule } from 'ngx-pmr-duration-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPmrDurationPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
