import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Custom Modules
import { FlightModule } from './modules/flight/flight.module';

// 3rd-Party Services
import { OAuthService } from 'angular2-oauth2/oauth-service'; 

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlightModule
  ],
  providers: [
    OAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
