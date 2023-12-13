import { Component, inject, signal } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {FormsModule} from '@angular/forms';
import { loginData} from 'src/app/core/interfaces/user'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService = inject(AuthService)
  router = inject(Router)
  error = signal(false)
  waiting = signal(false)

  loginData: loginData={
    UserName : "",
    Password : ""
  }

  login(){
  this.error.set(false)
  this.waiting.set(true)
  this.authService.login(this.loginData).then(res => {
    if(res) this.router.navigate(['subscription']);
    else{
      this.error.set(true)
    }
    this.waiting.set(false)
    })
  }
}

