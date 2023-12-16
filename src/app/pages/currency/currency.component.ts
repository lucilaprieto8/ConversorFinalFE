import { Component, Inject, OnInit, inject } from '@angular/core';
import { currencyData } from 'src/app/core/interfaces/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  constructor(private service: CurrencyService){}
  currencies: currencyData[]= []

  ngOnInit(): void {
    this.service.getAll().then( res => {
      this.currencies = res
    })
  }
}
