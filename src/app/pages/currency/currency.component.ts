import { Component, OnInit } from '@angular/core';
import { currencyData } from 'src/app/core/interfaces/currency';
import { AuthService } from 'src/app/services/auth.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit{
  currencys: currencyData[]=[]
  constructor(private service : CurrencyService){}
  ngOnInit(): void {
    this.service.getAll().then(res => {
      this.currencys = res;
    })
  
  }
}
