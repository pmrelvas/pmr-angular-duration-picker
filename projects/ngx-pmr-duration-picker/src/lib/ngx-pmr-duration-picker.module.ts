import { NgModule } from '@angular/core';
import { PmrDurationPickerComponent } from './component/pmr-duration-picker/pmr-duration-picker.component';
import { PmrDurationAtomComponent } from './component/pmr-duration-atom/pmr-duration-atom.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PmrDurationPickerComponent,
    PmrDurationAtomComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    PmrDurationPickerComponent
  ]
})
export class NgxPmrDurationPickerModule { }
