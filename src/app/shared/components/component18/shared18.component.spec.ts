import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared18Component } from './shared18.component';

describe('Shared18Component', () => {
  let component: Shared18Component;
  let fixture: ComponentFixture<Shared18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
