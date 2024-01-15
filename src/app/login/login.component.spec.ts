import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceStub: jasmine.SpyObj<LoginService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    loginServiceStub = jasmine.createSpyObj<LoginService>('LoginService', ['login', 'register']);
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: LoginService, useValue: loginServiceStub },
        { provide: Router, useValue: routerSpy }
      ],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard on successful login', () => {
    loginServiceStub.login.and.returnValue(true);
    component.loginEmployeeId = 1;
    component.login();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should display error message on unsuccessful login', () => {
    loginServiceStub.login.and.returnValue(false);
    component.loginEmployeeId = 2;
    component.login();
    expect(component.loginSuccessfull).toBeFalsy();
  });

  it('should register employee', () => {
    component.registerEmployeeId = 3; 
    component.register();
    expect(loginServiceStub.register).toHaveBeenCalledWith(3);
  });
});
