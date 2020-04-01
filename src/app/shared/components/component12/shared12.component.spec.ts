import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared12Component } from './shared12.component';

describe('Shared12Component', () => {
  let component: Shared12Component;
  let fixture: ComponentFixture<Shared12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
