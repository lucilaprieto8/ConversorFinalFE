import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { currencyData } from 'src/app/core/interfaces/currency'

@Component({
  selector: 'app-tarjeta-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-tarjeta-currency.component.html',
  styleUrls: ['./app-tarjeta-currency.component.scss']
})
export class AppTarjetaCurrencyComponent {
  @Input({required:true}) currency!:currencyData
}
