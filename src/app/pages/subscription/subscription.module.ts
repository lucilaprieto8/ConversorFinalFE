import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    HeaderComponent
  ]
})
export class SubscriptionModule { }
