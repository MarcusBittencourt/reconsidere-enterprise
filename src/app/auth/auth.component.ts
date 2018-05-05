import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: Observable<firebase.User>;
  email: string;
  senha: string;
  nome: string;
  urlImagem: string;

  ngOnInit(): void {
  }

  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  signup() {
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.email, this.senha).then((res) => {
      console.log(res);
      firebase.auth().currentUser.updateProfile({
        displayName: this.nome,
        photoURL: this.urlImagem
      });
    }).catch((erro: any) => {
      console.log(erro);
    });
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.senha).catch((erro: any) => {
      console.log(erro);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
