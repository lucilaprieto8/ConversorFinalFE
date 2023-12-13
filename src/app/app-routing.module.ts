import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"login",
    loadChildren: ()=> import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    loadChildren: ()=> import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "conversion",
    loadChildren: ()=> import('./pages/conversion/conversion.module').then(m => m.ConversionModule)  
  },
  {
    path: "historical",
    loadChildren: ()=> import('./pages/historical/historical.module').then(m => m.HistoricalModule)  
  },
  {
    path: "subscription",
    loadChildren: ()=> import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule)  
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
