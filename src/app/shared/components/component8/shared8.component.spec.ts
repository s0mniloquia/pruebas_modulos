import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared8Component } from './shared8.component';

describe('Shared8Component', () => {
  let component: Shared8Component;
  let fixture: ComponentFixture<Shared8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
