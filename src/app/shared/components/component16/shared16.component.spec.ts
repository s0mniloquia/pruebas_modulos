import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared16Component } from './shared16.component';

describe('Shared16Component', () => {
  let component: Shared16Component;
  let fixture: ComponentFixture<Shared16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
