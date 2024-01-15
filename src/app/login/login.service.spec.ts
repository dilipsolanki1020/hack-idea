import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register and check login', () => {
    const empId = 123;
    service.register(empId);
    expect(service.login(empId)).toBeTruthy();
  });

  it('should return false for an unregistered employee', () => {
    const empId = 456; 
    expect(service.login(empId)).toBeFalsy();
  });
});
