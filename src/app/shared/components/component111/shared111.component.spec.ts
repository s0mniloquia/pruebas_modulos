import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared111Component } from './shared111.component';

describe('Shared111Component', () => {
  let component: Shared111Component;
  let fixture: ComponentFixture<Shared111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
