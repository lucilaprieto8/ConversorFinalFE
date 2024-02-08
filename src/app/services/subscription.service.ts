import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { subscription } from '../core/interfaces/subscription';
import { API } from '../constants/api';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private service: ApiService, private eventService : EventService) { }

  async getAllSubscriptions(): Promise<subscription[]>{
    const res = await this.service.getAuth('api/Subscription/AllSubs');
    const resJson = await res.json();
    return resJson;
  }

  async updateSubscription(id: number){  
      const res = await fetch(API + 'api/Subscription/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.service.auth.token(),
        },
        body: JSON.stringify(id)

        
      });
      this.eventService.triggerConversionEvent();
    
  }

  async getMySubscription(): Promise<number>{
    const res = await this.service.getAuth('api/Subscription/GetSub');
    const resJson = await res.json();
    return resJson;
  }
}
