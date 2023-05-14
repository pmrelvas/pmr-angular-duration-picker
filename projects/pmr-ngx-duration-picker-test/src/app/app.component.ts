import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pmr-ngx-duration-picker-test';
  formGroup = this.formBuilder.group({
    duration: ['PY1M2W3D4H5M6S7']
  });

  constructor(private formBuilder: FormBuilder) {
    this.formGroup.get('duration')?.valueChanges
    .subscribe((val) => console.log(val));
  }

}
