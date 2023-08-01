import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class DurationPickerValidators {
  static readonly DURATION_REGEX =
  /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:(?:T(?=\d+[HMS]))(\d+)?H?(\d+)?M?(\d+)?S?)?$/;

  public static required(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isInvalidDuration =
        control.value == null ||
        control.value === '' ||
        control.value === 'P' ||
        control.value === 'PT';

      return control.touched && isInvalidDuration
        ? { durationRequired: true }
        : null;
    };
  }

  public static invalidDurationStr(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isInvalid = !DurationPickerValidators.DURATION_REGEX.test(
        control.value
      );

      return control.dirty && isInvalid ? { invalidDurationStr: true } : null;
    };
  }
}
