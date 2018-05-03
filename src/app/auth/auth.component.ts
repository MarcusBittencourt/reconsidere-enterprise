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
  urlImagem:string;

  constructor(public afAuth: AngularFireAuth){
    this.user = this.afAuth.authState;
  }

  loginFacebook(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginEmail(){
  //console.log(this.email, this.senha);
  firebase.auth().signInWithEmailAndPassword(this.email,this.senha).catch((erro:any)=>{
    console.log(erro);
  });
  }

  cadastroEmail(){
  //console.log(this.email, this.senha);
  firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((res)=>{
  console.log(res);
  let usuario = firebase.auth().currentUser;
  usuario.updateProfile({
    displayName: this.nome,
    photoURL: this.urlImagem
  });
  }).catch((erro:any)=>{
    console.log(erro);
  });
  }


  loginGithub(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  sair(){
  this.afAuth.auth.signOut();
  }

}
