import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CodeCardMode } from '../../code-card-mode';
import { FormBuilder } from '@angular/forms';

declare var hljs: any;

@Component({
  selector: 'app-overview-examples',
  templateUrl: './overview-examples.component.html',
  styleUrls: ['./overview-examples.component.scss'],
})
export class OverviewExamplesComponent {

  ngModelExample = {
    duration: 'P1Y2M3W4DT5H6M7S',
    mode: CodeCardMode.EXAMPLE,
    htmlCode:
      '<pmr-duration-picker [(ngModel)]="duration"></pmr-duration-picker>',
    tsCode: `\
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  duration = 'P4DT5H6M7S';
}`,
  };

  formControlExample = {
    formGroup: this.formBuilder.group({
      duration: ['P1Y2M3W4DT5H6M7S'],
    }),
    mode: CodeCardMode.EXAMPLE,
    htmlCode: `\
<form [formGroup]="formGroup">
  <pmr-duration-picker formControlName="duration"></pmr-duration-picker>
</form>`,
    tsCode: `\
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formGroup = this.formBuilder.group({
    duration: ['P1Y2M3W4DT5H6M7S']
  });

  constructor(private formBuilder: FormBuilder) {
  }
}`,
  };

  timeExample = {
    duration: 'PT1H2M3S',
    displayedItems: ['TH', 'TM', 'TS'],
    mode: CodeCardMode.EXAMPLE,
    htmlCode:
      '<pmr-duration-picker [displayedItems]="displayedItems" [(ngModel)]="duration"></pmr-duration-picker>',
    tsCode: `\
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedItems = ['TH', 'TM', 'TS'];
  duration = 'PT1H2M3S';
}`,
  };

  withoutLabelExample = {
    duration: 'PT1H2M3S',
    mode: CodeCardMode.EXAMPLE,
    htmlCode:
      '<pmr-duration-picker [disableLabel]="true" [(ngModel)]="duration"></pmr-duration-picker>',
    tsCode: `\
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  duration = 'PT1H2M3S';
}`,
  };

  increasedFontExample = {
    duration: 'PT1H2M3S',
    mode: CodeCardMode.EXAMPLE,
    htmlCode:
      '<pmr-duration-picker style="font-size: 30px" [(ngModel)]="duration"></pmr-duration-picker>',
    tsCode: `\
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  duration = 'PT1H2M3S';
}`,
  };

  disableSwitchExample = {
    duration: 'PT1H2M3S',
    mode: CodeCardMode.EXAMPLE,
    htmlCode:
      '<pmr-duration-picker [disableSwitchMode]="true" [(ngModel)]="duration"></pmr-duration-picker>',
    tsCode: `\
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  duration = 'PT1H2M3S';
}`,
  };

  constructor(private formBuilder: FormBuilder) {}
}
