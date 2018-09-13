import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'widget-sales',
  templateUrl: './sales.widget.component.html',
  styleUrls: ['./default.widget.component.css']
})
@NgModule({})
export class SalesWidgetComponent implements OnInit {

  public percent_result = 0;
  public text_result = 'Nenhum crescimento';
  public doughnutChartLabels = ['Reciclável', 'Não Reciclável'];
  public doughnutChartData = [67, 33];
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
          'rgba(247, 181, 27, 1.0)',
          'rgba(247, 181, 27, 0.2)'
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
