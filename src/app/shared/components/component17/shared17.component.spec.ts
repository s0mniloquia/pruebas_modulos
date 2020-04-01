import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared17Component } from './shared17.component';

describe('Shared17Component', () => {
  let component: Shared17Component;
  let fixture: ComponentFixture<Shared17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
