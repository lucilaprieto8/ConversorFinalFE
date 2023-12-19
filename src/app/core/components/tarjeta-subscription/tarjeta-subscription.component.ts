import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { subscription } from '../../interfaces/subscription';

@Component({
  selector: 'app-tarjeta-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-subscription.component.html',
  styleUrls: ['./tarjeta-subscription.component.scss']
})
export class TarjetaSubscriptionComponent {
    @Input() subscriptionData!: subscription
}
