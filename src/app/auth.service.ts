import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
     user: Observable<firebase.User>;
  constructor(
      private router: Router,
      private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
}


signup(email: string, password: string) {
    console.log(email,password);
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Esta funcionando!', value);
      })
      .catch(err => {
        console.log('Explodiu:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
       this.router.navigateByUrl("/startcenter");
        console.log('Esta funcionando');
      })
      .catch(err => {
        console.log('Explodiu:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }




}