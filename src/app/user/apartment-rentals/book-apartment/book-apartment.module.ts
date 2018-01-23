import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BookApartmentRoutingModule } from './book-apartment-routing.module';
import { BookApartmentComponent } from './book-apartment.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookApartmentRoutingModule
  ],
  declarations: [BookApartmentComponent]
})
export class BookApartmentModule { }
