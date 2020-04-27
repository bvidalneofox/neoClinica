import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    legend: {
      position: 'top',
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontStyle: 'bold',
          fontColor: 'black',
        }
      }],
      yAxes: [{
        ticks: {
          fontStyle: 'bold',
          fontColor: 'black',
        }
      }]
    },
    annotation: {
      annotations: [
        {
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartType2 = 'bar';
  public lineChartPlugins = [];

  // GRAFICO PIE DE USUARIOS CON MAYOR NUMERO DE CONSULTAS
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        fontSize: 16,
        fontColor: 'black',
        fontStyle: 'bold',
      },
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
