import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  employeeId:Number[] = [1];
  constructor() { }

  login(empId: any){
    //console.log(empId,this.employeeId.includes(empId))
    return this.employeeId.includes(empId)
  }
}
