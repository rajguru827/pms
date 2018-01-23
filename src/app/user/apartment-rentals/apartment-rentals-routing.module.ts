import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentRentalsComponent } from './apartment-rentals.component';

const routes: Routes = [
    {
      path: '', 
      component: ApartmentRentalsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentRentalsRoutingModule { }
