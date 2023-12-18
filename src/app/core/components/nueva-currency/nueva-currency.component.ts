import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';
import { currencyData } from '../../interfaces/currency';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nueva-currency',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nueva-currency.component.html',
  styleUrls: ['./nueva-currency.component.scss']
})
export class NuevaCurrencyComponent {
  constructor(private service: CurrencyService, private route: ActivatedRoute, private router: Router){}
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
  const paramMap = this.route.snapshot.paramMap;

  if (paramMap && paramMap.has('id')) {
    var currencyId = 0
  }
  const currencyToEdit: currencyData = {
    id: currencyId = +paramMap.get('id')!,
    leyend: this.currency.leyend,
    symbol: this.currency.symbol,
    ic: this.currency.ic
  }
  console.log('Antes de llamar a service.edit');
  {
    const res = await this.service.edit(currencyToEdit);
    console.log('Después de llamar a service.edit', res);
    this.router.navigate(['/currency'])
    this.cerrar.emit();
  }
}
}
