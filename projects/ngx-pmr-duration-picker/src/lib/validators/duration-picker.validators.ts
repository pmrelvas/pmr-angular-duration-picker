import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class DurationPickerValidators {

  public static required(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isInvalidDuration = control.value == null
        || control.value === ''
        || control.value === 'P'
        || control.value === 'PT';

      return control.dirty && isInvalidDuration ? {durationRequired: true} : null;
    }
  }

}
