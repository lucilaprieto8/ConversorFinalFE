import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricalRoutingModule } from './historical-routing.module';
import { TarjetaHistoricalComponent } from 'src/app/core/components/tarjeta-historical/tarjeta-historical.component';
import { HistoricalComponent } from './historical.component';


@NgModule({
  declarations: [
    HistoricalComponent
  ],
  imports: [
    CommonModule,
    HistoricalRoutingModule,
    TarjetaHistoricalComponent
  ]
})
export class HistoricalModule { }
