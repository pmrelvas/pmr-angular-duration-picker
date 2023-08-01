import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PmrDurationPickerComponent } from 'ngx-pmr-duration-picker';

export class DurationPickerValidators {
  public static required(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isInvalidDuration =
        control.value == null ||
        control.value === '' ||
        control.value === 'P' ||
        control.value === 'PT';

      return control.dirty && isInvalidDuration
        ? { durationRequired: true }
        : null;
    };
  }

  public static invalidDurationStr(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isInvalid = PmrDurationPickerComponent.DURATION_REGEX.test(
        control.value
      );

      return control.dirty && isInvalid ? { invalidDurationStr: true } : null;
    };
  }
}
