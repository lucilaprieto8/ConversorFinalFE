import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { subscription } from '../core/interfaces/subscription';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private service: ApiService) { }

  async getAllSubscriptions(): Promise<subscription[]>{
    const res = await this.service.getAuth('api/Subscription/AllSubs');
    const resJson = await res.json();
    return resJson;
  }

  async updateSubscription(id: number){
    console.log(this.service.auth.token())
  
      const res = await fetch(API + 'api/Subscription/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.service.auth.token(),
        },
        body: JSON.stringify(id)
      });
    
  }
}
