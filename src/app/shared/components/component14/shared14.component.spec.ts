import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared14Component } from './shared14.component';

describe('Shared14Component', () => {
  let component: Shared14Component;
  let fixture: ComponentFixture<Shared14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
