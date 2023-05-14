import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pmr-duration-picker',
  templateUrl: 'pmr-duration-picker.component.html',
  styleUrls: ['pmr-duration-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: PmrDurationPickerComponent
    }
  ]
})
export class PmrDurationPickerComponent implements ControlValueAccessor {

  @Input() displayedItems = ['Y', 'M', 'W', 'D', 'TH', 'TM', 'TS'];
  @Input() disableLabel = false;

  durationMap: Map<string, number> = new Map([
    ["Y", 0],
    ["M", 0],
    ["W", 0],
    ["D", 0],
    ["TH", 0],
    ["TM", 0],
    ["TS", 0],
  ]);

  durationStr = this.buildDurationStr();
  onChange = (durationStr: string) => {};
  onTouched = () => {};
  isTouched = false;
  isDisabled = false;

  writeValue(durationStr: string): void {
    this.durationStr = durationStr;
    this.durationMap = this.parseDuration(this.durationStr);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    fn = this.onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  buildDurationStr(): string {
    let durStr = "P";
    // date fields
    if (this.durationMap.get('Y')) {
      durStr += this.durationMap.get('Y') + 'Y';
    }
    if (this.durationMap.get('M')) {
      durStr += this.durationMap.get('M') + 'M';
    }
    if (this.durationMap.get('W')) {
      durStr += this.durationMap.get('W') + 'W';
    }
    if (this.durationMap.get('D')) {
      durStr += this.durationMap.get('D') + 'D';
    }

    // time fields
    if (this.hasTimeFields()) {
      durStr += "T";
    }
    if (this.durationMap.get('TH')) {
      durStr += this.durationMap.get('TH') + 'H';
    }
    if (this.durationMap.get('TM')) {
      durStr += this.durationMap.get('TM') + 'M';
    }
    if (this.durationMap.get('TS')) {
      durStr += this.durationMap.get('TS') + 'S';
    }

    return durStr;
  }

  parseDuration(durationStr: string): Map<string, number> {
    if (!durationStr || !durationStr.startsWith("P")) {
      return new Map();
    }
    const durationMap = new Map<string, number>();
    let durationStrWithoutPeriod = durationStr.replace("P", "");
    let datePortion = "";
    let timePortion = "";
    if (durationStrWithoutPeriod.includes("T")) {
      [datePortion, timePortion] = durationStrWithoutPeriod.split("T");
    } else {
      datePortion = durationStrWithoutPeriod;
    }
    const dateRegex = /(\d+)([YMDW])/g;
    const timeRegex = /(\d+)([HMS])/g;
    let match;
    while ((match = dateRegex.exec(datePortion)) !== null) {
      const value = parseInt(match[1]);
      const unit = match[2];
      durationMap.set(unit, value);
    }
    while ((match = timeRegex.exec(timePortion)) !== null) {
      const value = parseInt(match[1]);
      const unit = "T" + match[2];
      durationMap.set(unit, value);
    }
    return durationMap;
  }

  hasTimeFields(): boolean {
    return this.durationMap.get('TH') != 0
      || this.durationMap.get('TM') != 0
      || this.durationMap.get('TS') != 0;
  }

  onValueChange(unit: string, newVal: number): void {
    this.markAsTouched();
    this.durationMap.set(unit, newVal);
    this.durationStr = this.buildDurationStr();
    this.onChange(this.durationStr);
  }

  markAsTouched(): void {
    if (!this.isTouched) {
      this.onTouched();
      this.isTouched = true;
    }
  }
}
