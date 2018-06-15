import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Code44Component } from './code404.component';

describe('Code44Component', () => {
  let component: Code44Component;
  let fixture: ComponentFixture<Code44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
