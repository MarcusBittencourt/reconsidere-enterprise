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

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['Materiais'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Papel'},
    {data: [78, 48, 40, 19, 86, 27, 90], label: 'Plastico'},
    {data: [33, 48, 40, 19, 86, 27, 90], label: 'Vidro'},
    {data: [90, 48, 40, 19, 86, 27, 90], label: 'Metal'},
    {data: [77, 48, 40, 19, 86, 27, 90], label: 'Orgânico'},
    {data: [55, 48, 40, 19, 86, 27, 90], label: 'Eletrônico'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  ngOnInit() {
    this.last_updates$ = this.af.list('/companies/eowyn/measurements').valueChanges();
  }

}
