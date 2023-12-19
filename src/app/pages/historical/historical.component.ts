import { Component } from '@angular/core';
import { historical } from 'src/app/core/interfaces/historical';
import { AuthService } from 'src/app/services/auth.service';
import { HistoricalService } from 'src/app/services/historical.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent {
  constructor(private service: HistoricalService){}
  historicals : historical[] = []

  ngOnInit(): void {
    this.service.getHistorical().then( res => {
      this.historicals = res
    })
  }

}
