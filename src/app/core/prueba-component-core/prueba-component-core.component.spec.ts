import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaComponentCoreComponent } from './prueba-component-core.component';

describe('PruebaComponentCoreComponent', () => {
  let component: PruebaComponentCoreComponent;
  let fixture: ComponentFixture<PruebaComponentCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaComponentCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaComponentCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
