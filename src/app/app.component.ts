import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  glass = 0; 
  plastic = 0;
  metal = 0;  
  organic = 0;
  papper = 0;
  enterprise = {name: "Reconsidere"};
}