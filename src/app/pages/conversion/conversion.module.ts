import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { ConversionComponent } from './conversion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConversionComponent
  ],
  imports: [
    CommonModule,
    ConversionRoutingModule,
    HeaderComponent,
    FormsModule
  ]
})
export class ConversionModule { }
