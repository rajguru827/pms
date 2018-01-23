import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { 
                path: 'dashboard', 
                loadChildren: './dashboard/dashboard.module#DashboardModule' 
            },
            { 
                path: 'apartment-rentals', 
                loadChildren: './apartment-rentals/apartment-rentals.module#ApartmentRentalsModule' 
            },
            { 
                path: 'apartment-rentals/book-apartment/:id', 
                loadChildren: './apartment-rentals/book-apartment/book-apartment.module#BookApartmentModule' 
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
