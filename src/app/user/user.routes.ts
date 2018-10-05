import {UserComponent} from './user.component';
import {LoginComponent} from './login.component';
import {Routes} from '@angular/router';

export const userRoutes:Routes=[{path:'profile',component:UserComponent}
                                ,{path:'login',component:LoginComponent}]