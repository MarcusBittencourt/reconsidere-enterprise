import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'widget-nextcollection',
  templateUrl: './nextcollection.widget.component.html',
  styleUrls: ['./default.widget.component.css']
})
@NgModule({})
export class NextcollectionWidgetComponent implements OnInit {

  public percent_result = 0;
  public text_result = 'Nenhum crescimento';
  public doughnutChartLabels = ['Reciclável', 'Não Reciclável'];
  public doughnutChartData = [20, 80];
  public doughnutChartType = 'doughnut';
  public doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    cutoutPercentage: 65,
  };

  public doughnutChartColors: any[] = [
    {
        backgroundColor: [
          'rgba(237, 44, 18, 1.0)',
          'rgba(237, 44, 18, 0.2)'
        ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
