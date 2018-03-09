import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  constructor() { }


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['Materiais'];
  public barChartType: 'bar';
  public barChartLegend: true;

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
  }

}
