import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { autenticacao } from "../autenticacao";
import {UserModel} from '../model/user.model'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent  {

 
  email: string;
  senha: string;
  nome: string;
 
  constructor(
    public afAuth: AngularFireAuth, 
    private authService: autenticacao)
  {
   
  }

 

signup() {
  this.authService.signup(this.email, this.senha);
  this.email = this.senha = '';
}

 login() {
  this.authService.login(this.email, this.senha);
  this.email = this.senha = '';    
 }

}
