import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonedComponent } from './buttoned.component';

describe('ButtonedComponent', () => {
  let component: ButtonedComponent;
  let fixture: ComponentFixture<ButtonedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonedComponent]
    });
    fixture = TestBed.createComponent(ButtonedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
