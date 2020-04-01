import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared7Component } from './shared7.component';

describe('Shared7Component', () => {
  let component: Shared7Component;
  let fixture: ComponentFixture<Shared7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
