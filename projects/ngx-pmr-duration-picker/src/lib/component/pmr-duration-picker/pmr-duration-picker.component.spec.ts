import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPmrDurationPickerComponent } from './ngx-pmr-duration-picker.component';

describe('NgxPmrDurationPickerComponent', () => {
  let component: NgxPmrDurationPickerComponent;
  let fixture: ComponentFixture<NgxPmrDurationPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPmrDurationPickerComponent]
    });
    fixture = TestBed.createComponent(NgxPmrDurationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
