import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCurrencyComponent } from './detalle-currency.component';

const routes: Routes = [
  {
  path: "",
  component: DetalleCurrencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleCurrencyRoutingModule { }
