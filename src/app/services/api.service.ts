import { Injectable, inject } from '@angular/core';
import { API } from '../constants/api';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  auth = inject(AuthService);
  constructor() {}
  

  async getAuth(endpoint:string){
  const resp = await fetch(API+endpoint,{
    headers:{
      Authorization: "Bearer" + this.auth.token()
    }
  })
  return resp
}
} 