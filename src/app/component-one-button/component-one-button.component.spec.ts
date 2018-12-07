import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOneButtonComponent } from './component-one-button.component';

describe('ComponentOneButtonComponent', () => {
  let component: ComponentOneButtonComponent;
  let fixture: ComponentFixture<ComponentOneButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentOneButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
