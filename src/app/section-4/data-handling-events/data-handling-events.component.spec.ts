import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHandlingEventsComponent } from './data-handling-events.component';

describe('DataHandlingEventsComponent', () => {
  let component: DataHandlingEventsComponent;
  let fixture: ComponentFixture<DataHandlingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataHandlingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataHandlingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
