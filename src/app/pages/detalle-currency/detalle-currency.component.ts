import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { currencyData } from 'src/app/core/interfaces/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-detalle-currency',
  templateUrl: './detalle-currency.component.html',
  styleUrls: ['./detalle-currency.component.scss']
})
export class DetalleCurrencyComponent implements OnInit {
  currencyservice = inject(CurrencyService);
  activatedroute = inject(ActivatedRoute);
  router = inject(Router);

  currency: currencyData={
    id: 0,
    leyend: "",
    symbol: "",
    ic: 0
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      this.currencyservice.getById(params['id']).then((res) => {
        if (res) this.currency = res;
      });
    });
  }

  borrarCurrency(){}
}
