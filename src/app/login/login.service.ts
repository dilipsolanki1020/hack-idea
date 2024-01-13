import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  employeeId:string[] = ['1'];
  constructor() { }

  login(empId: any){
    return this.employeeId.includes(empId)
  }
}
