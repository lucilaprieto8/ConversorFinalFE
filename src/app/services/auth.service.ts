import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { loginData } from '../core/interfaces/user';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    this.token.set(localStorage.getItem('token'));
   }
  
   router = inject(Router);
   token: WritableSignal <string | null> = signal(null);

   async login(loginData: loginData){
    try{
      const res = await fetch(API + "api/Auth/Authenticate", {
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      if (!res.ok) return false
      const tokenR = await res.text()
      localStorage.setItem('token', tokenR)
      this.token.set(tokenR)
      return true;
    }
    catch{
      return false;
    }
   }
}


