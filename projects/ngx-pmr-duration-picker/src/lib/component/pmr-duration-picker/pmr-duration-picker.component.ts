import { Component } from '@angular/core';

@Component({
  selector: 'pmr-duration-picker',
  templateUrl: 'pmr-duration-picker.component.html',
  styleUrls: ['pmr-duration-picker.component.scss']
})
export class PmrDurationPickerComponent {

  durationMap: Map<string, number> = new Map([
    ["Y", 0],
    ["M", 0],
    ["W", 0],
    ["D", 0],
    ["H", 0],
    ["Min", 0],
    ["S", 0],
  ]);

  parsedDuration = this.buildParsedDuration();

  buildParsedDuration(): string {
    return "PY" + this.durationMap.get('Y')
      + "M" + this.durationMap.get('M')
      + "W" + this.durationMap.get('W')
      + "D" + this.durationMap.get('D')
      + "H" + this.durationMap.get('H')
      + "M" + this.durationMap.get('Min')
      + "S" + this.durationMap.get('S');
  }

  onValueChange(unit: string, newVal: number): void {
    this.durationMap.set(unit, newVal);
    this.parsedDuration = this.buildParsedDuration();
  }
}
