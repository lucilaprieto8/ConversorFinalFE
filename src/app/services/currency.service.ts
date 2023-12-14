import { Injectable } from '@angular/core';
import { currencyData } from '../core/interfaces/currency';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private service: ApiService
  ) {
  }
  async getAll(): Promise<currencyData[]>{
    const res = await this.service.getAuth('api/Currency/GetAll');
    const resJson = await res.json();
    return resJson;
  }
}
