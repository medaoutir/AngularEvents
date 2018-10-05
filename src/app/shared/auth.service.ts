import { Injectable } from '@angular/core';
import{IUser} from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:IUser
  constructor() { }

  loginUser(userName:string,password:string){
    this.currentUser={
      id:1,
      userName:userName,
      firstName:"John",
      lastName:"Papa"    }
  }

  updateUser(firstName:string,lastName:string){
    this.currentUser.firstName=firstName
    this.currentUser.lastName=lastName
  }

  isAuthenticated(){
    return !!this.currentUser
  }
}
