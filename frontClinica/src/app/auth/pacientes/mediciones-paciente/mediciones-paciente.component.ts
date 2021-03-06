import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-mediciones-paciente',
  templateUrl: './mediciones-paciente.component.html',
  styleUrls: ['./mediciones-paciente.component.css']
})
export class MedicionesPacienteComponent implements OnInit {

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
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
