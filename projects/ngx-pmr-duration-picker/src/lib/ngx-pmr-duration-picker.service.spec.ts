import { TestBed } from '@angular/core/testing';

import { NgxPmrDurationPickerService } from './ngx-pmr-duration-picker.service';

describe('NgxPmrDurationPickerService', () => {
  let service: NgxPmrDurationPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPmrDurationPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
