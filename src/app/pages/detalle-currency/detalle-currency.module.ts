import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleCurrencyRoutingModule } from './detalle-currency-routing.module';
import { DetalleCurrencyComponent } from './detalle-currency.component';
import { NuevaCurrencyComponent } from 'src/app/core/components/nueva-currency/nueva-currency.component';


@NgModule({
  declarations: [
    DetalleCurrencyComponent
  ],
  imports: [
    CommonModule,
    DetalleCurrencyRoutingModule,
    NuevaCurrencyComponent
  ]
})
export class DetalleCurrencyModule { }
