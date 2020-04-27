import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Cristian Arriagada Sanchez',
    flag: '19.110.786-9',
    area: '22:00',
  },
  {
    name: 'Ricardo Zapata Solid',
    flag: '6.933.783-9',
    area: '14:20',
  },
  {
    name: 'Victoria Cuevas Garrido',
    flag: '18.522.783-9',
    area: '17:00',
  },
  {
    name: 'Javiera Lagos Alcaide',
    flag: '8.355.455-k',
    area: '4:00',
  }
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  countries = COUNTRIES;

  espera = [
    {
      name: 'Cristian Arriagada Sanchez',
      flag: '19.110.786-9',
      area: '22:00',
      emergencia: '4',
    },
    {
      name: 'Ricardo Zapata Solid',
      flag: '6.933.783-9',
      area: '14:20',
      emergencia: '2',
    },
    {
      name: 'Victoria Cuevas Garrido',
      flag: '18.522.783-9',
      area: '17:00',
      emergencia: '2',
    },
    {
      name: 'Javiera Lagos Alcaide',
      flag: '8.355.455-k',
      area: '4:00',
      emergencia: '3',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
