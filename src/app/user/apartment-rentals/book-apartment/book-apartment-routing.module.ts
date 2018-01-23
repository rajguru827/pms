import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookApartmentComponent } from './book-apartment.component';

const routes: Routes = [
  {path: '', component: BookApartmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookApartmentRoutingModule { }
