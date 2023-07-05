# ngx-pmr-duration-picker

## Table of contents

- [Overview](#overview)
- [How to use it](#how-to-use-it)
- [Examples](#examples)
  - [NgModel](#ngmodel)
  - [FormsModule](#formsmodule)
  - [Time](#time)
  - [Increased Font](#increased-font)
  - [Disable Switch](#disable-switch)
- [Properties](#properties)
- [Run test/docs application](#run-testdocs-application)
- [Testing](#testing)

## Overview

**ngx-pmr-duration-picker** is an Angular library to display and manage durations on your application following the standard [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

It is able to work with both **ngModel** and **FormsModule**, and allows you to customize it to best match your application.

It parses and allows you to edit durations on a pretty and string modes.

Live examples and documentation can be found on the [documentation page]().

![example of duration picker](https://i.postimg.cc/j2SdLbR0/Screenshot-2023-07-05-at-15-02-53.png)

![example of duration picker](https://i.postimg.cc/FFS7k9bm/Screenshot-2023-07-05-at-15-05-20.png)

![example of duration picker](https://i.postimg.cc/FsQ1j2GS/Screenshot-2023-07-05-at-15-05-33.png)


## How to use it

You can install this lib with the following command:

```
npm i --save ngx-pmr-duration-picker
```

Then you need to import it into your module:

```ts
import { NgxPmrDurationPickerModule } from 'ngx-pmr-duration-picker';
```

Then you can use it on your angular components as described on the following section.

## Examples

### NgModel

#### HTML

```html
<pmr-duration-picker [(ngModel)]="duration"></pmr-duration-picker>
```

#### TS

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  duration = 'P4DT5H6M7S';
}
```

### FormsModule

#### HTML

```html
<form [formGroup]="formGroup">
  <pmr-duration-picker formControlName="duration"></pmr-duration-picker>
</form>
```

#### TS

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formGroup = this.formBuilder.group({
    duration: ['P1Y2M3W4DT5H6M7S']
  });

  constructor(private formBuilder: FormBuilder) {
  }
}
```

### Time

#### HTML

```html
<pmr-duration-picker [displayedItems]="displayedItems" [(ngModel)]="duration"></pmr-duration-picker>
```

#### TS

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedItems = ['TH', 'TM', 'TS'];
  duration = 'PT1H2M3S';
}
```

### Increased Font

#### HTML

```html
<pmr-duration-picker style="font-size: 30px" [(ngModel)]="duration"></pmr-duration-picker>
```

#### TS

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  duration = 'PT1H2M3S';
}
```

### Disable switch

#### HTML

```html
<pmr-duration-picker [disableSwitchMode]="true" [(ngModel)]="duration"></pmr-duration-picker>
```

#### TS

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  duration = 'PT1H2M3S';
}
```

## Properties

| Property | Type | Datatype | Description | Default Value |
| --- | --- | --- | --- | --- |
| displayedItems | Input | string[] | List of duration units to be displayed. Time fields have a T prefix. Possible values are: `Y, M, W, D TH, TM, TS`. | `['Y', 'M', 'W', 'D', 'TH', 'TM', 'TS']` |
| disableLabel | Input | boolean | If set to true, disables the duration label. | false |
| disableSwitchMode | Input | boolean | If set to true, disables the switch mode between pretty and string modes. | false |
| durationLabel | Input | string | Allows to override form field label used in string mode. | Duration |
| valid | Output | EventEmitter | Boolean EventEmitter that reports wether the duration string is valid or not. | |

## Run test/docs application

In order to run the test/documentation page, you first need to build the library and run it in watched mode to be able to catch automatically catch your changes.

```
ng build ngx-pmr-duration-picker --watch
```

Then on another terminal window we just need to run the application:

```
npm start
```

## Testing

This lib is covered by [cypress](https://www.cypress.io/) tests.

Tests are automatically run after every build, but they can also be run through the following command:

```
npm run cy:run
```

or by opening cypress tool in headed mode

```
npm run cy:open
```
