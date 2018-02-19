import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  measurement = null;
  measurements$: AngularFireList<any[]>;

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    this.measurement = {
      date: new Date().toJSON(),
      materials: [
        { id: 'papper', name: 'Papel', unity_of_measure: 'kg', quantity: 0 },
        { id: 'metal', name: 'Metal', unity_of_measure: 'kg', quantity: 0 },
        { id: 'plastic', name: 'Plastico', unity_of_measure: 'kg', quantity: 0 },
        { id: 'glass', name: 'Vidro', unity_of_measure: 'kg', quantity: 0 },
        { id: 'eletronic', name: 'Eletrônico', unity_of_measure: 'kg', quantity: 0 },
        { id: 'organic', name: 'Orgânico', unity_of_measure: 'kg', quantity: 0 }
    ]};
  }

  save() {
    this.measurement.weighing = this.measurement.materials
      .map(material => material.quantity)
      .reduce((sum, current) => sum + current);

    this.measurements$ = this.af.list('/companies/eowyn/measurements');
    this.measurements$.push(this.measurement);
  }

  discard() {
  }

}
