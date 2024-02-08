import { Component, signal } from '@angular/core';
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

  inputamount!: number
  idfrom: number = 0
  idto: number = 0

  viewErrorText = signal(false);
  errorText: string = "";

  ngOnInit(): void {
    this.service.getAll().then( res => {
      this.currencyS = res
    })
  }

  resultadoConversion : number | undefined
  
  async convertsCurrency(){
    if(this.idfrom == this.idto) {
      this.showErrorMessage("No se puede convertir la misma moneda");
      return;
    }
    var currencyToConvertData : currencyToConvert = {
        amount: this.inputamount,
        currencyFromId: this.idfrom,
        currencyToId: this.idto
      }
    try {
      let value = await this.service.convertCurrency(currencyToConvertData);
      let numeroRecortado = Math.floor(value * 100) / 1000;
      this.resultadoConversion = numeroRecortado;
      
    } catch (error: any) {
      this.showErrorMessage(error);
    }
}

  showErrorMessage(message: string){
    this.viewErrorText.set(true);
    this.errorText = message;
    setTimeout(() => {
      this.viewErrorText.set(false);
    }, 2000);
  }
  

}   