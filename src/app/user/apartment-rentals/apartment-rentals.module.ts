import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentRentalsRoutingModule } from './apartment-rentals-routing.module';
import { ApartmentRentalsComponent } from './apartment-rentals.component';

@NgModule({
  imports: [
    CommonModule,
    ApartmentRentalsRoutingModule
  ],
  declarations: [ApartmentRentalsComponent]
})
export class ApartmentRentalsModule { }
