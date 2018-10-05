import { Component, OnInit,Inject } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {Toastr,TOASTR_TOKEN} from '../common/toastr.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private firstName:FormControl
  private lastName:FormControl
  private profileForm:FormGroup
  constructor(private auth:AuthService,private routes:Router,@Inject(TOASTR_TOKEN) private toastr:Toastr) { }
  
  ngOnInit() {
    this.firstName= new FormControl(this.auth.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z]*')])
    this.lastName=new FormControl(this.auth.currentUser.lastName,Validators.required)
    this.profileForm=new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
  }
  

  save(formValues){
    this.auth.updateUser(formValues.firstName,formValues.lastName)
    // this.routes.navigate(['events'])
    this.toastr.success('Profile saved');
    
  }
  
  cancel(){
    this.routes.navigate(['events'])
  }

  getStyleLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  getStyleFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

}
