import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CodeCardMode } from '../../code-card-mode';

declare var hljs: any;

@Component({
  selector: 'app-preview-code',
  templateUrl: './preview-code.component.html',
  styleUrls: ['./preview-code.component.scss'],
})
export class PreviewCodeComponent {
  @ViewChild('codeHtml', { static: false }) codeHtml!: ElementRef;
  @ViewChild('codeTs', { static: false }) codeTs!: ElementRef;

  @Input() title!: string;
  @Input() mode!: CodeCardMode;
  @Input() htmlCode!: string;
  @Input() tsCode!: string;

  constructor(private changeDetector: ChangeDetectorRef) {}

  onModeToggleClick(): void {
    if (this.mode === CodeCardMode.EXAMPLE) {
      this.mode = CodeCardMode.CODE;
    } else {
      this.mode = CodeCardMode.EXAMPLE;
    }
    this.changeDetector.detectChanges();
    hljs.highlightElement(this.codeHtml.nativeElement, { language: 'html' });
    hljs.highlightElement(this.codeTs.nativeElement, {
      language: 'typescript',
    });
  }

  isExampleMode(): boolean {
    return this.mode === CodeCardMode.EXAMPLE;
  }
}
