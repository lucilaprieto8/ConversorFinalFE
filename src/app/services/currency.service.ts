import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { API } from '../constants/api';
import { currencyData, currencyToConvert } from '../core/interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends ApiService{


  async create(currency: currencyData): Promise<boolean> {
    if (currency.id) return false;
    const res = await fetch(API + 'api/Currency', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.auth.token(),
      },
      body: JSON.stringify(currency),
    });
    return res.ok;
  }

  async delete(id: number): Promise<boolean> {
    const res = await fetch(API + 'api/Currency/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    return res.ok;
  }

  async edit(currency: currencyData){
    console.log(this.auth.token())
    const url = `${API}api/Currency/${currency.id}`;
  
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.auth.token(),
        },
        body: JSON.stringify(currency)
      });
  }

  async getAll(): Promise<currencyData[]>{
    const res = await this.getAuth('api/Currency/GetAll');
    const resJson = await res.json();
    return resJson;
  }
  
  async getById(id: number | string): Promise<currencyData | undefined> {
    const res = await fetch(API + 'api/Currency/' + id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    return await res.json();
  }

  async convertCurrency(currencyToConvert: currencyToConvert): Promise<number>{
    console.log(this.auth.token())
    const res = await fetch(API + 'api/Currency/Convert', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
        Authorization: 'Bearer ' + this.auth.token(),
      },
      body: JSON.stringify(currencyToConvert)   
    })
    return await Number(res.json)
  }
}
