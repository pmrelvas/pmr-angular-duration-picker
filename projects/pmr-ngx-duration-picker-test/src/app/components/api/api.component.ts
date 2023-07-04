import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare var hljs: any;

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements AfterViewInit {

@ViewChild('importCode', {static: false}) importCode!: ElementRef;

  importCodeStr = 'import { NgxPmrDurationPickerModule } from \'ngx-pmr-duration-picker\';';

  ngAfterViewInit(): void {
    hljs.highlightElement(this.importCode.nativeElement, { language: 'typescript' });
  }

}
