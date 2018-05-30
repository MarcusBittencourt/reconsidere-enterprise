import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectStepsComponent } from './collect-steps.component';

describe('CollectStepsComponent', () => {
  let component: CollectStepsComponent;
  let fixture: ComponentFixture<CollectStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
