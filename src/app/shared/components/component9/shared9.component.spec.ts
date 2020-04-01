import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared9Component } from './shared9.component';

describe('Shared9Component', () => {
  let component: Shared9Component;
  let fixture: ComponentFixture<Shared9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
