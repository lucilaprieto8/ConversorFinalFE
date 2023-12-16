import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { AppTarjetaCurrencyComponent } from 'src/app/core/components/app-tarjeta-currency/app-tarjeta-currency.component';
import { NuevaCurrencyComponent } from 'src/app/core/components/nueva-currency/nueva-currency.component';
import { ConversionComponent } from './conversion.component';


@NgModule({
  declarations: [
    ConversionComponent
  ],
  imports: [
    CommonModule,
    ConversionRoutingModule,
    HeaderComponent,
    NuevaCurrencyComponent,
    AppTarjetaCurrencyComponent
  ]
})
export class ConversionModule { }
