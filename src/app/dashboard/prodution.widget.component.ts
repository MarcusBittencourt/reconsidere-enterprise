import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'widget-prodution',
  templateUrl: './prodution.widget.component.html',
  styleUrls: ['./default.widget.component.css']
})
@NgModule({})
export class ProdutionWidgetComponent implements OnInit {

  constructor() { }

  public doughnutChartLabels = ['Reciclável', 'Não Reciclável'];
  public doughnutChartData = [339, 102];
  public doughnutChartType = 'doughnut';

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
