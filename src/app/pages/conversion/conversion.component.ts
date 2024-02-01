import { Component } from '@angular/core';
import {  currencyData, currencyToConvert } from 'src/app/core/interfaces/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  constructor(private service: CurrencyService){}
  currencyS: currencyData [] = []

  inputamount: number = 0
  idfrom: number = 0
  idto: number = 0


  ngOnInit(): void {
    this.service.getAll().then( res => {
      this.currencyS = res
    })
  }

  resultadoConversion : number | undefined
  
  async convertsCurrency(){
    var currencyToConvertData : currencyToConvert = {
        amount: this.inputamount,
        currencyFromId: this.idfrom,
        currencyToId: this.idto
      }
    this.resultadoConversion = await this.service.convertCurrency(currencyToConvertData)
}
  

}   