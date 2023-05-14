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
    duration: ['P1Y2M3W4DT5H6M7S']
  });
  durationNgModel = 'P1Y2M3W4DT5H6M7S';
  durationTimeOnly = 'PT1H2M3S';

  constructor(private formBuilder: FormBuilder) {
    this.formGroup.get('duration')?.valueChanges
    .subscribe((val) => console.log(val));
  }

}
