import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCodeComponent } from './preview-code.component';

describe('PreviewCodeComponent', () => {
  let component: PreviewCodeComponent;
  let fixture: ComponentFixture<PreviewCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
