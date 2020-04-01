import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared11111Component } from './shared11111.component';

describe('Shared11111Component', () => {
  let component: Shared11111Component;
  let fixture: ComponentFixture<Shared11111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared11111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared11111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
