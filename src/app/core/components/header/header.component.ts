import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private service: AuthService, private currencyService:CurrencyService){}

  logout(){
    this.service.logout()
  }
  attemps : number|undefined 
  async ngOnInit(): Promise<void> {
   let hola = await this.currencyService.getAttemps()
   this.attemps = hola
  }

 


}
