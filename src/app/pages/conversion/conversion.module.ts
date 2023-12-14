import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConversionRoutingModule,
    HeaderComponent
  ]
})
export class ConversionModule { }
