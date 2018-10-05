import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {LoginComponent} from './login.component';
import {userRoutes} from './user.routes';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent,LoginComponent]
})
export class UserModule { }
