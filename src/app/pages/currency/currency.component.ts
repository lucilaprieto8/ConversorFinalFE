import { Component, ElementRef, ViewChild } from '@angular/core';
import { currencyData } from 'src/app/core/interfaces/currency';
import { AuthService } from 'src/app/services/auth.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  constructor(private service: CurrencyService, private services: AuthService){}
  @ViewChild('dialogNuevaCurrency') dialog!: ElementRef;
  currencies: currencyData[]= []

  ngOnInit(): void {
    this.getAllCurrencies();
  }

  getAllCurrencies(){
    this.service.getAll().then( res => {
      this.currencies = res
    })
  }

  cerrarModal() {
    this.dialog.nativeElement.close();
    this.getAllCurrencies();
  }
}
