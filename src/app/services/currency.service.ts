import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { API } from '../constants/api';
import { AuthService } from './auth.service';
import { currencyConversion, currencyData } from '../core/interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends ApiService{


  async create(currency: currencyData): Promise<boolean> {
    if (currency.id) return false;
    const res = await fetch(API + 'api/Currency/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.auth.token(),
      },
      body: JSON.stringify(currency),
    });
    return res.ok;
  }

  async delete(Id: number): Promise<boolean> {
    const res = await fetch(API + 'api/Currency' + Id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    return res.ok;
  }

  async edit(currency: currencyData): Promise<boolean> {
    console.log("ando");
    if (!currency.id) return false;
    try {
      const res = await fetch(API + 'api/Currency/' + currency.id, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + this.auth.token(),
        },
        
        body: JSON.stringify(currency),
      });
  
      console.log('Código de estado de la respuesta:', res.status);
  
      if (res.ok) {
        console.log('Respuesta exitosa:', await res.text());
      } else {
        console.error('Error en la respuesta:', await res.text());
      }
  
      return res.ok;
    } catch (error) {
      console.error('Error en la llamada a fetch:', error);
      return false;
    }
  }
  


  async getAll(): Promise<currencyData[]>{
    const res = await this.getAuth('api/Currency/GetAll');
    const resJson = await res.json();
    return resJson;
  }
  async getAllC(): Promise<currencyConversion[]>{
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
}
