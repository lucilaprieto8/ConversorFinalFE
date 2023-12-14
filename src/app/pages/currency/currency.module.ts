import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { AppTarjetaCurrencyComponent } from 'src/app/core/components/app-tarjeta-currency/app-tarjeta-currency.component';
import { CurrencyComponent } from './currency.component';


@NgModule({
  declarations: [
      CurrencyComponent
  ],

  imports: [
    CommonModule,
    CurrencyRoutingModule,
    AppTarjetaCurrencyComponent
  ]
})
export class CurrencyModule { }
