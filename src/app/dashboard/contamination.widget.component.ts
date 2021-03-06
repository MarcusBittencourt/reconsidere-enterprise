import { Component, OnInit, NgModule } from '@angular/core';
import { DefaultWidgetComponent } from './default.widget.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'widget-contamination',
  templateUrl: './contamination.widget.component.html',
  styleUrls: ['./default.widget.component.css']
})
@NgModule({})
export class ContaminationWidgetComponent implements OnInit, DefaultWidgetComponent {

  displayed: boolean;

  constructor() {
    this.displayed = true;
   }

   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit(): void {
  }

}
