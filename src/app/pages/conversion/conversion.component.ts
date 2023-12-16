import { Component, Input } from '@angular/core';
import { currencyConversion, currencyData } from 'src/app/core/interfaces/currency';
import { AuthService } from 'src/app/services/auth.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  constructor(private service: CurrencyService){}
  currencyC: currencyConversion [] = []
  
  @Input() currencyCS!:currencyConversion

  ngOnInit(): void {
    this.service.getAll().then( res => {
      this.currencyC = res
    })
  }
}
