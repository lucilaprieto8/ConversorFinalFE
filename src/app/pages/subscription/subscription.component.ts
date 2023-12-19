import { Component } from '@angular/core';
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

  ngOnInit(): void {
    this.service.getAllSubscriptions().then( res => {
      this.subscriptions = res
    })
  }

  updateSubscription(id: number){
    this.service.updateSubscription(id)
  }
  
}
