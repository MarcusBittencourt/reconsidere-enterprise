import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from "../auth.service";
import {UserModel} from '../model/user.model'

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

 
  email: string;
  password: string;
  name: string;
 
  constructor(
    public afAuth: AngularFireAuth, 
    private authService: AuthService)
  {
   
  }

signup() {
  this.authService.signup(this.email, this.password);
  this.email = this.password = '';
}

 login() {
  this.authService.login(this.email, this.password);
  this.email = this.password = '';    
 }

}
