import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioNotLoggedGuard } from './guards/usuario-not-logged.guard';
import { usuarioLoggedGuard } from './guards/usuario-logged.guard';

const routes: Routes = [
  {
    path:"login",
    canActivate: [usuarioNotLoggedGuard],
    loadChildren: ()=> import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    canActivate: [usuarioNotLoggedGuard],
    loadChildren: ()=> import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "conversion",
    canActivate: [usuarioLoggedGuard],
    loadChildren: ()=> import('./pages/conversion/conversion.module').then(m => m.ConversionModule)  
  },
  {
    path: "historical",
    canActivate: [usuarioLoggedGuard],
    loadChildren: ()=> import('./pages/historical/historical.module').then(m => m.HistoricalModule)  
  },
  {
    path: "subscription",
    canActivate: [usuarioLoggedGuard],
    loadChildren: ()=> import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule)  
  },
  {
    path: "currency",
    canActivate: [usuarioLoggedGuard],
    loadChildren: ()=> import('./pages/currency/currency.module').then(m => m.CurrencyModule)
  },
  {
    path: "currency/:id",
    canActivate: [usuarioLoggedGuard],
    loadChildren: ()=> import('./pages/detalle-currency/detalle-currency.module').then(m => m.DetalleCurrencyModule)
  },
  {
    path: "",
    redirectTo: 'conversion',
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
