import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitSchedulerComponent } from './transit-scheduler.component';

describe('TransitSchedulerComponent', () => {
  let component: TransitSchedulerComponent;
  let fixture: ComponentFixture<TransitSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
