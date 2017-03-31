import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRoutingModule } from './flight.routing-module';
import { FlightsComponent } from './components/flights/flights.component';

@NgModule({
  imports: [
    CommonModule,
    FlightRoutingModule
  ],
  declarations: [FlightsComponent, FlightsComponent, FlightsComponent]
})
export class FlightModule { }
