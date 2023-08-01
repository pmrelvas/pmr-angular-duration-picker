import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class DurationPickerValidators {
  static readonly DURATION_REGEX =
    /^(?!P$)(?!PT$)^P(?:(?=\d+[YMWDSH])[YMWD])?(?:(?=\d+[YMWDSH])\d+Y)?(?:(?=\d+[YMWDSH])\d+M)?(?:(?=\d+[YMWDSH])\d+W)?(?:(?=\d+[YMWDSH])\d+D)?(?:(?:T(?=\d+[HMS]))(?=\d+[HMS])(\d+)?H)?(?:(?=\d+[HMS])\d+M)?(?:(?=\d+[HMS])\d+S)?$/;

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

      return control.touched && isInvalid ? { invalidDurationStr: true } : null;
    };
  }
}
