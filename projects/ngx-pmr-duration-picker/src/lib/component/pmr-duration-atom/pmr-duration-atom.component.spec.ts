import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmrDurationAtomComponent } from './pmr-duration-atom.component';

describe('PmrDurationAtomComponent', () => {
  let component: PmrDurationAtomComponent;
  let fixture: ComponentFixture<PmrDurationAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmrDurationAtomComponent]
    });
    fixture = TestBed.createComponent(PmrDurationAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
