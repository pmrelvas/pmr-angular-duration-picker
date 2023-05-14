# NgxPmrDurationPicker

NgxPmrDurationPicker is a very simple angular component to handle durations on your angular application forms.

## Installation

This library can be installed through the following command:

```
npm install --save ngx-pmr-duration-picker
```

And on the `app.module.ts` or the module you want to import:
```json
@NgModule({
  declarations: [...],
  imports: [
    NgxPmrDurationPickerModule,
    ...
  ],
  providers: [...]
})
```
## Component API

### Input properties:

| property | datatype | mandatory | description | default |
| --- | --- | --- | --- | --- |
| displayedItems | string[] | false | Allows to specify which duration items to display | ['Y', 'M', 'W', 'D', 'TH', 'TM', 'TS'] |
| disableLabel | boolean | false | Allow to remove duration string | false |

## Examples of usage

### With Form Control
```html
<form [formGroup]="formGroup">
  <pmr-duration-picker formControlName="duration"></pmr-duration-picker>
</form>
```

### With ngModel
```html
<pmr-duration-picker [(ngModel)]="durationNgModel"></pmr-duration-picker>
```

### Only time properties
```html
<pmr-duration-picker [displayedItems]="['TH', 'TM', 'TS']" [(ngModel)]="durationTimeOnly"></pmr-duration-picker>
```

### Without label
```html
<pmr-duration-picker [disableLabel]="true" [(ngModel)]="durationTimeOnly"></pmr-duration-picker>
```

## Items

| key | meaning |
| --- | --- |
| Y | Years |
| W | Weeks |
| M | Months |
| D | Days |
| TH | Hours |
| TM | Minutes |
| TS | Seconds |

## Build

Run `ng build ngx-pmr-duration-picker` to build the project. The build artifacts will be stored in the `dist/` directory.

For local development it's recommended to use the `--watch` flag.
