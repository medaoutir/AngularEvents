import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    constructor(private auth:AuthService, private routes:Router){

    }
login(FormsValue){
    this.auth.loginUser(FormsValue.userName,FormsValue.password)
    this.routes.navigate(['events'])
}

cancel(){
    this.routes.navigate(['events'])
}
}