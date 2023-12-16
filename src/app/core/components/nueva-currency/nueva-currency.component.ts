import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';
import { currencyData } from '../../interfaces/currency';

@Component({
  selector: 'app-nueva-currency',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nueva-currency.component.html',
  styleUrls: ['./nueva-currency.component.scss']
})
export class NuevaCurrencyComponent {
  constructor(private service: CurrencyService){}
  @Output() cerrar = new EventEmitter();
  @Input() currency: currencyData  = {
    id: 0,
    symbol: "",
    leyend: "",
    ic: 0,
  }
async onSubmit() {
  this.currency.id ? this.agregarCurrency() : this.editarCurrency();
}

async agregarCurrency() {
  console.log("agreganding")
  const res = await this.service.create(this.currency);
  this.cerrar.emit();
  if (res) {
    console.log('currency agregado');
  } else {
    console.log('Error agregando contacto');
  }
}

async editarCurrency() {
  console.log('Antes de llamar a service.edit');
  try {
    const res = await this.service.edit(this.currency);
    console.log('Después de llamar a service.edit');

    this.cerrar.emit();

    if (res) {
      console.log('currency editada');
    } else {
      console.log('Error editando currency');
    }
  } catch (error) {
    console.error('Error en la llamada a service.edit:', error);
  }
}

}
