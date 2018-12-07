import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentThreeButtonComponent } from './component-three-button.component';

describe('ComponentThreeButtonComponent', () => {
  let component: ComponentThreeButtonComponent;
  let fixture: ComponentFixture<ComponentThreeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentThreeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentThreeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
