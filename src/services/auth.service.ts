import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  authenticated: boolean;

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

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.authenticated = true;
        console.log('Usuário autenticado com sucesso!');
      })
      .catch(err => {
        console.log('Autenticação de usuário inválida:', err.message);
      });
    }

  logout() {
    this.firebaseAuth
    .auth
    .signOut();
    this.authenticated = false;
  }

  isAuthenticated(): any {
    return this.authenticated;
  }

}
