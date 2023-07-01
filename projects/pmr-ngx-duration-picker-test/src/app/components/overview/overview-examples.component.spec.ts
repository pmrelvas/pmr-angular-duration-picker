import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewExamplesComponent } from './overview-examples.component';

describe('OverviewComponent', () => {
  let component: OverviewExamplesComponent;
  let fixture: ComponentFixture<OverviewExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
