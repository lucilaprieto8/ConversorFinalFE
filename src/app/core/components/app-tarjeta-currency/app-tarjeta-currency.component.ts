import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaCurrencyComponent } from '../nueva-currency/nueva-currency.component';
import { currencyConversion, currencyData } from '../../interfaces/currency';

@Component({
  selector: 'app-tarjeta-currency',
  standalone: true,
  imports: [CommonModule,NuevaCurrencyComponent],
  templateUrl: './app-tarjeta-currency.component.html',
  styleUrls: ['./app-tarjeta-currency.component.scss']
})
export class AppTarjetaCurrencyComponent {
  
  @Input() currency!:currencyData
  @Input() currencyC!: currencyConversion



}
