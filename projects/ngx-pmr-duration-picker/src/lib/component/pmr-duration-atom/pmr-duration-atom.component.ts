import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pmr-duration-atom',
  templateUrl: './pmr-duration-atom.component.html',
  styleUrls: ['./pmr-duration-atom.component.scss']
})
export class PmrDurationAtomComponent {

  @Input() label = '';
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  onValueChange(newVal: number): void {
    this.valueChange.next(newVal);
  }
}
