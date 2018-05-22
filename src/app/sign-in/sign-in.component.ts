import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  credentials = { password: '', email: '', remember: false};
  remember: boolean;
  hidepassword =  true;
  entering = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('userAuth')) {
      this.credentials = JSON.parse(localStorage.getItem('userAuth'));
    }
  }

  login() {
    this.entering = true;
    this.auth.login(this.credentials.email, this.credentials.password);
    if (this.credentials.remember) { this.rememberMe(); }
    this.router.navigate(['/startcenter']);
  }

  rememberMe() {
    localStorage.setItem('userAuth', JSON.stringify(this.credentials));
  }

}
