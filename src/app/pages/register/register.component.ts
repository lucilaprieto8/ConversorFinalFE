import { Component, Inject, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { registerData } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private service : AuthService ){}
  router = inject(Router)
  errorRegister: WritableSignal<boolean> = signal(false)


  registerData: registerData={
    UserName : "",
    Password : "" ,
    IdSubscription : 1,
  }

 async register(){
  
    const res = await this.service.register(this.registerData);
      if (res.ok){
        this.router.navigate(['login']);
      }
      else
       console.log("no lamda") 
      this.errorRegister.set(true)
    }

  logout(){
    this.service.logout()
  }
  }


