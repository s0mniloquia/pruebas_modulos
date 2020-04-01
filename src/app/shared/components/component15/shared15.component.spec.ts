import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared15Component } from './shared15.component';

describe('Shared15Component', () => {
  let component: Shared15Component;
  let fixture: ComponentFixture<Shared15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
