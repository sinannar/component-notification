import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwoButtonComponent } from './component-two-button.component';

describe('ComponentTwoButtonComponent', () => {
  let component: ComponentTwoButtonComponent;
  let fixture: ComponentFixture<ComponentTwoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTwoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTwoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
