import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'widget-culture',
  templateUrl: './culture.widget.component.html',
  styleUrls: ['./default.widget.component.css']
})
@NgModule({})
export class CultureWidgetComponent implements OnInit {

  constructor() { }

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

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
