import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { RatesComponent } from './rates/rates.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ServiceDetailComponent,
    RatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
