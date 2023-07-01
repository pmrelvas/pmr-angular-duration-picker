import {
  ChangeDetectorRef,
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
  @ViewChild('codeNgModelHtml', { static: false }) codeNgModelHtml!: ElementRef;
  @ViewChild('codeNgModelTs', { static: false }) codeNgModelTs!: ElementRef;
  @ViewChild('codeFormControlHtml', { static: false })
  codeFormControlHtml!: ElementRef;
  @ViewChild('codeFormControlTs', { static: false })
  codeFormControlTs!: ElementRef;
  @ViewChild('codeTimeHtml', { static: false }) codeTimeHtml!: ElementRef;
  @ViewChild('codeTimeTs', { static: false }) codeTimeTs!: ElementRef;

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

  constructor(
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {}

  onNgModelToggleClick(): void {
    if (this.ngModelExample.mode === CodeCardMode.EXAMPLE) {
      this.ngModelExample.mode = CodeCardMode.CODE;
    } else {
      this.ngModelExample.mode = CodeCardMode.EXAMPLE;
    }
    this.changeDetector.detectChanges();
    hljs.highlightElement(this.codeNgModelHtml.nativeElement, { language: 'html' });
    hljs.highlightElement(this.codeNgModelTs.nativeElement, { language: 'typescript' });
  }

  isNgModelExampleMode(): boolean {
    return this.ngModelExample.mode === CodeCardMode.EXAMPLE;
  }

  onFormControlToggleClick(): void {
    if (this.formControlExample.mode === CodeCardMode.EXAMPLE) {
      this.formControlExample.mode = CodeCardMode.CODE;
    } else {
      this.formControlExample.mode = CodeCardMode.EXAMPLE;
    }
    this.changeDetector.detectChanges();
    hljs.highlightElement(this.codeFormControlHtml.nativeElement, {
      language: 'html',
    });
    hljs.highlightElement(this.codeFormControlTs.nativeElement, {
      language: 'typescript',
    });
  }

  isFormControlExampleMode(): boolean {
    return this.formControlExample.mode === CodeCardMode.EXAMPLE;
  }

  onTimeToggleClick(): void {
    if (this.timeExample.mode === CodeCardMode.EXAMPLE) {
      this.timeExample.mode = CodeCardMode.CODE;
    } else {
      this.timeExample.mode = CodeCardMode.EXAMPLE;
    }
    this.changeDetector.detectChanges();
    hljs.highlightElement(this.codeTimeHtml.nativeElement, {
      language: 'html',
    });
    hljs.highlightElement(this.codeTimeTs.nativeElement, {
      language: 'typescript',
    });
  }

  isTimeExampleMode(): boolean {
    return this.timeExample.mode === CodeCardMode.EXAMPLE;
  }
}
