import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private employeeId:Number[] = [1];
  constructor() { 
    localStorage.setItem("employeeIds",JSON.stringify([1,2]))
  }

  private getStoredEmployeeIds(): number[] {
    const storedIdsString = localStorage.getItem("employeeIds");
    return storedIdsString ? JSON.parse(storedIdsString) : [];
  }

  login(empId: any){
    //console.log(empId,this.employeeId.includes(empId))
    const storedEmployeeIds = this.getStoredEmployeeIds();
    return storedEmployeeIds.includes(empId)
  }
}
