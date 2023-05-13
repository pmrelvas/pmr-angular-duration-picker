import { Component, Input } from '@angular/core';

@Component({
  selector: 'pmr-duration-atom',
  templateUrl: './pmr-duration-atom.component.html',
  styleUrls: ['./pmr-duration-atom.component.scss']
})
export class PmrDurationAtomComponent {

  @Input() label = '';

  value = 0;
}
