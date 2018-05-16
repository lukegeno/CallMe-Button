import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSignupComponent } from './request-signup.component';

describe('RequestSignupComponent', () => {
  let component: RequestSignupComponent;
  let fixture: ComponentFixture<RequestSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
