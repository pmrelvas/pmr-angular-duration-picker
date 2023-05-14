import { Component } from '@angular/core';
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
  onChange = (durationStr: string) => {};
  onTouched = () => {};
  isTouched = false;
  isDisabled = false;

  writeValue(durationStr: string): void {
    this.parsedDuration = durationStr;
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
    this.markAsTouched();
    this.durationMap.set(unit, newVal);
    this.parsedDuration = this.buildParsedDuration();
    this.onChange(this.parsedDuration);
  }

  markAsTouched(): void {
    if (!this.isTouched) {
      this.onTouched();
      this.isTouched = true;
    }
  }
}
