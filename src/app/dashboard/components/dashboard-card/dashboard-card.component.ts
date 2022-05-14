import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardDto } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements AfterViewInit {
  dashboardData:any;
 
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
      { data: [ ], label: 'Todo' },
      { data: [ ], label: 'Inprogress' },
      { data: [ ], label: 'Done' }
    ]
  };

  constructor(private dashboardService:DashboardService) { 
    
  }

  ngOnInit(): void {
    let userDetails: any = localStorage.getItem('userDetails') == null ? '' : localStorage.getItem('userDetails');
    let userId = JSON.parse(userDetails)['user']['_id'];
    let year = new Date().getFullYear();
    this.dashboardService.get_dashboard_data(userId,year).subscribe(dashboardData=>{
      this.dashboardData = dashboardData;
      this.barChartData.datasets = [
        { data: dashboardData.listDataForTodo},
        { data: dashboardData.listDataForInProgress },
        { data: dashboardData.listDataForTodo}
      ]
    })
  }
ngAfterViewInit(): void {

}

}
