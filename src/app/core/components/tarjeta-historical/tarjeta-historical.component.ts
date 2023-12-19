import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { historical } from '../../interfaces/historical';

@Component({
  selector: 'app-tarjeta-historical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-historical.component.html',
  styleUrls: ['./tarjeta-historical.component.scss']
})
export class TarjetaHistoricalComponent {

  @Input() historicalData!: historical
}
