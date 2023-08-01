import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DurationPickerMode } from '../../duration-picker-mode';

@Component({
  selector: 'pmr-duration-picker',
  templateUrl: 'pmr-duration-picker.component.html',
  styleUrls: ['pmr-duration-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PmrDurationPickerComponent,
    }
  ],
})
export class PmrDurationPickerComponent implements ControlValueAccessor {
  readonly DURATION_REGEX =
  /^(?!P$)(?!PT$)^P(?:(?=\d+[YMWDSH])[YMWD])?(?:(?=\d+[YMWDSH])\d+Y)?(?:(?=\d+[YMWDSH])\d+M)?(?:(?=\d+[YMWDSH])\d+W)?(?:(?=\d+[YMWDSH])\d+D)?(?:(?:T(?=\d+[HMS]))(?=\d+[HMS])(\d+)?H)?(?:(?=\d+[HMS])\d+M)?(?:(?=\d+[HMS])\d+S)?$/;

  @Input() displayedItems = ['Y', 'M', 'W', 'D', 'TH', 'TM', 'TS'];
  @Input() disableLabel = false;
  @Input() disableSwitchMode = false;
  @Input() label = 'Duration';
  @Output() valid = new EventEmitter(true);
  isValid = true;

  durationMap: Map<string, number> = new Map([
    ['Y', 0],
    ['M', 0],
    ['W', 0],
    ['D', 0],
    ['TH', 0],
    ['TM', 0],
    ['TS', 0],
  ]);

  durationStr = this.buildDurationStr();
  onChange = (durationStr: string) => {};
  onTouched = (t: any) => {};
  isTouched = false;
  isDisabled = false;
  mode = DurationPickerMode.PRETTY;

  writeValue(durationStr: string): void {
    this.durationStr = durationStr;
    this.durationMap = this.parseDuration(this.durationStr);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onAtomFocusOut(): void {
    this.markAsTouched();
  }

  buildDurationStr(): string {
    let durStr = '';
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
    let timeDurStr = '';
    if (this.durationMap.get('TH')) {
      timeDurStr += this.durationMap.get('TH') + 'H';
    }
    if (this.durationMap.get('TM')) {
      timeDurStr += this.durationMap.get('TM') + 'M';
    }
    if (this.durationMap.get('TS')) {
      timeDurStr += this.durationMap.get('TS') + 'S';
    }

    if (durStr != '' || timeDurStr != '') {
      durStr = 'P' + durStr;
    }
    if (timeDurStr != '') {
      durStr += 'T' + timeDurStr;
    }
    return durStr;
  }

  parseDuration(durationStr: string): Map<string, number> {
    if (!durationStr || !durationStr.startsWith('P')) {
      return new Map();
    }
    const durationMap = new Map<string, number>();
    let durationStrWithoutPeriod = durationStr.replace('P', '');
    let datePortion = '';
    let timePortion = '';
    if (durationStrWithoutPeriod.includes('T')) {
      [datePortion, timePortion] = durationStrWithoutPeriod.split('T');
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
      const unit = 'T' + match[2];
      durationMap.set(unit, value);
    }
    return durationMap;
  }

  onValueChange(unit: string, newVal: number): void {
    this.durationMap.set(unit, newVal);
    this.durationStr = this.buildDurationStr();
    this.onChange(this.durationStr);
  }

  onStrValueChange(newVal: string): void {
    this.writeValue(newVal);
    this.validateDuration();
    this.onChange(this.durationStr);
  }

  markAsTouched(): void {
    if (!this.isTouched) {
      this.onTouched(true);
      this.isTouched = true;
    }
  }

  onSwitchModeClick(): void {
    if (this.mode === DurationPickerMode.PRETTY) {
      this.mode = DurationPickerMode.STRING;
    } else {
      this.mode = DurationPickerMode.PRETTY;
    }
  }

  isPrettyMode(): boolean {
    return this.mode === DurationPickerMode.PRETTY;
  }

  isStringMode(): boolean {
    return this.mode === DurationPickerMode.STRING;
  }

  validateDuration(): void {
    this.isValid = this.DURATION_REGEX.test(this.durationStr);
    this.valid.emit(this.valid);
  }
}
