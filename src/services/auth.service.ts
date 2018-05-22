import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  authenticated = false;

  constructor(private router: Router, private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    console.log(email, password);
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Usuário registrado com sucesso!', value);
      })
      .catch(err => {
        console.log('Registro de usuário inválido:', err.message);
      });
    }

  login(email: string, password: string): Promise<boolean> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.authenticated = false;
    console.log('Deslogado com sucesso!');
  }

  isAuthenticated(): any {
    return this.authenticated;
  }

}
