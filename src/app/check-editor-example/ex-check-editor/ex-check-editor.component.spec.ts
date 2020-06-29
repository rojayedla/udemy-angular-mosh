import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCheckEditorComponent } from './ex-check-editor.component';

describe('ExCheckEditorComponent', () => {
  let component: ExCheckEditorComponent;
  let fixture: ComponentFixture<ExCheckEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExCheckEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCheckEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
