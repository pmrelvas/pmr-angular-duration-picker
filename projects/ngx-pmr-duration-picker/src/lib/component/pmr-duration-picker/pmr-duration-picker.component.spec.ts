import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmrDurationPickerComponent } from './pmr-duration-picker.component';

describe('NgxPmrDurationPickerComponent', () => {
  let component: PmrDurationPickerComponent;
  let fixture: ComponentFixture<PmrDurationPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmrDurationPickerComponent]
    });
    fixture = TestBed.createComponent(PmrDurationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
