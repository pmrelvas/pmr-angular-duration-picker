import { NgModule } from '@angular/core';
import { PmrDurationPickerComponent } from './component/pmr-duration-picker/pmr-duration-picker.component';
import { PmrDurationAtomComponent } from './component/pmr-duration-atom/pmr-duration-atom.component';



@NgModule({
  declarations: [
    PmrDurationPickerComponent,
    PmrDurationAtomComponent
  ],
  imports: [
  ],
  exports: [
    PmrDurationPickerComponent
  ]
})
export class NgxPmrDurationPickerModule { }
