import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared10Component } from './shared10.component';

describe('Shared10Component', () => {
  let component: Shared10Component;
  let fixture: ComponentFixture<Shared10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
