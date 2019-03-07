/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobpostUiComponent } from './jobpost-ui.component';

describe('JobpostUiComponent', () => {
  let component: JobpostUiComponent;
  let fixture: ComponentFixture<JobpostUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpostUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
