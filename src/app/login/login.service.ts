import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private employeeId:Number[] = [1234];
  constructor() { 
    localStorage.setItem("employeeIds",JSON.stringify(this.employeeId))
  }

  private getStoredEmployeeIds(): number[] {
    const storedIdsString = localStorage.getItem("employeeIds");
    return storedIdsString ? JSON.parse(storedIdsString) : [];
  }

  login(empId: any){
    //console.log(empId,this.employeeId.includes(empId))
    const storedEmployeeIds = localStorage.getItem("employeeIds");
    return storedEmployeeIds?.includes(empId)
  }

  register(empId:any){
    this.employeeId.push(empId)
    localStorage.setItem("employeeIds",JSON.stringify(this.employeeId))
  }
}
