import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAccountComponent } from './signup-account.component';

describe('SignupAccountComponent', () => {
  let component: SignupAccountComponent;
  let fixture: ComponentFixture<SignupAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
