import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './core/components/tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './core/components/header/header.component';
import { DetalleCurrencyComponent } from './pages/detalle-currency/detalle-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderComponent
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
