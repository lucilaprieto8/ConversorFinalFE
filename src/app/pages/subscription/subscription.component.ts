import { Component, signal } from '@angular/core';
import { subscription } from 'src/app/core/interfaces/subscription';
import { AuthService } from 'src/app/services/auth.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  constructor(private service: SubscriptionService){}
  subscriptions: subscription[]= []
  mySubscriptionId = signal(0);

  ngOnInit(): void {
    this.service.getAllSubscriptions().then( res => {
      this.subscriptions = res
    })

    this.getMySubscription();
  }

  updateSubscription(id: number){
    if(id != this.mySubscriptionId()) {
      this.service.updateSubscription(id).then(() => {
        this.getMySubscription();
      })
    }
  }
  
  getMySubscription(){
    this.service.getMySubscription().then( res => {
      this.mySubscriptionId.set(res);
    })
  }
}
