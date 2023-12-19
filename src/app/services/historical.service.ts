import { Injectable } from '@angular/core';
import { historical } from '../core/interfaces/historical';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {

  constructor(private service: ApiService) { }

  async getHistorical(): Promise<historical[]>{
    const res = await this.service.getAuth('api/History');
    const resJson = await res.json();
    return resJson;
  }
}
