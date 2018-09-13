import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'widget-households',
  templateUrl: './households.widget.component.html',
  styleUrls: ['./default.widget.component.css']
})
@NgModule({})
export class HouseholdsWidgetComponent implements OnInit {

  public percent_result = 0;
  public text_result = 'Nenhum crescimento';
  public doughnutChartLabels = ['Reciclável', 'Não Reciclável'];
  public doughnutChartData = [7989, 148000];
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
          'rgba(148, 247, 143, 1.0)',
          'rgba(75, 244, 66, 1.0)'
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
