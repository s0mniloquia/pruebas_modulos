import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedComponent } from './shared.component';

describe('Shared3Component', () => {
  let component: SharedComponent;
  let fixture: ComponentFixture<SharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
