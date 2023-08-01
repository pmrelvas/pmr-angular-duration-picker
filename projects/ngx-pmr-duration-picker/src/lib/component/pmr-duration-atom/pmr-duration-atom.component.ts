import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pmr-duration-atom',
  templateUrl: './pmr-duration-atom.component.html',
  styleUrls: ['./pmr-duration-atom.component.scss']
})
export class PmrDurationAtomComponent {

  @Input() label = '';
  @Input() value: number | undefined = 0;
  @Input() disabled = false;
  @Input() isInvalid = false;
  @Output() valueChange = new EventEmitter<number>();
  @Output() focusOut = new EventEmitter<boolean>();

  onValueChange(newVal: number): void {
    this.valueChange.next(newVal);
  }

  onFocusOut(): void {
    this.focusOut.next(true);
  }
}
