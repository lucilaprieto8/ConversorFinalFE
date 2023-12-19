import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { SubscriptionComponent } from './subscription.component';
import { TarjetaSubscriptionComponent } from 'src/app/core/components/tarjeta-subscription/tarjeta-subscription.component';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    HeaderComponent,
    TarjetaSubscriptionComponent
  ]
})
export class SubscriptionModule { }
