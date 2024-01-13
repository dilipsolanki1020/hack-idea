import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login('1');
    console.log(" login success")
    this.router.navigate(['/dashboard'])
  }
}
