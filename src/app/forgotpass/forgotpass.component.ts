import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  recovering: boolean;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  recover() {

  }

}
