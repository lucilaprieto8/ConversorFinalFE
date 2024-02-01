import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private service: AuthService, private currencyService:CurrencyService, private eventService: EventService){}


  attemps : number|undefined 
  async ngOnInit(): Promise<void> {
    this.updateAttempts();

    // Suscribirse al evento de conversión
    this.eventService.conversionOccurred$.subscribe(() => {
      this.updateAttempts();
    });
  }

  async updateAttempts() {
    this.attemps = await this.currencyService.getAttemps();
  }

  logout(){
    this.service.logout()
  }
}
