import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared6Component } from './shared6.component';

describe('Shared6Component', () => {
  let component: Shared6Component;
  let fixture: ComponentFixture<Shared6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
