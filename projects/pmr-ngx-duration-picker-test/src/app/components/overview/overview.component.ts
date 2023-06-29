import { Component } from '@angular/core';
import { CodeCardMode } from '../../code-card-mode';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  basicExample = {
    duration: 'P1Y2M3W4DT5H6M7S',
    mode: CodeCardMode.EXAMPLE,
    code: '<pmr-duration-picker [(ngModel)]="basicExample.duration"></pmr-duration-picker>',
    editorOptions: {
      theme: 'vs-light',
      language: 'html',
      readOnly: true,
      minimap: {
        enabled: false
      },
      automaticLayout: true
    }
  };

  onBasicUsageToggleClick(): void {
    if (this.basicExample.mode === CodeCardMode.EXAMPLE) {
      this.basicExample.mode = CodeCardMode.CODE;
    } else {
      this.basicExample.mode = CodeCardMode.EXAMPLE;
    }
  }

  isBasicUsageExampleMode(): boolean {
    return this.basicExample.mode === CodeCardMode.EXAMPLE;
  }
}
