import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
      CommonModule,
      NgbModule.forRoot(),
    UserRoutingModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
