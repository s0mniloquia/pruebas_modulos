import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared13Component } from './shared13.component';

describe('Shared13Component', () => {
  let component: Shared13Component;
  let fixture: ComponentFixture<Shared13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
