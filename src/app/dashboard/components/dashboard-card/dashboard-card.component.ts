import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements AfterViewInit {

 
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max:100
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ,59, 80, 81, 56, 0], label: 'Todo' },
      { data: [ 28, 48, 40, 19, 86, 27, 80,59, 80, 81, 56, 0 ], label: 'Inprogress' },
      { data: [ 28, 48, 40, 19, 86, 27, 80,59, 80, 81, 56, 0 ], label: 'Done' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    
  }
ngAfterViewInit(): void {

}

}
