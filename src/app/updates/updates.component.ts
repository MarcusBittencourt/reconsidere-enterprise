import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
   last_updates$: any;

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    this.last_updates$ = this.af.list('/companies/eowyn/measurements').valueChanges();
  }

}
