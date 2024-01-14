import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
registerEmployeeId: any;
loginEmployeeId!: Number;
loginSuccessfull:boolean = true;
  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    const employeeIdNumber = Number(this.loginEmployeeId);
    if(this.loginService.login(employeeIdNumber)){
      // window.alert(" login success")
      this.loginSuccessfull = true
      this.router.navigate(['/dashboard'])
    }
    else {
      console.log("failed");
      this.loginSuccessfull = false;
    }
  }

  register() {
    this.loginService.register(Number(this.registerEmployeeId))
    window.alert("Employee ID added!!!!")
    this.registerEmployeeId = null;
    }
}
