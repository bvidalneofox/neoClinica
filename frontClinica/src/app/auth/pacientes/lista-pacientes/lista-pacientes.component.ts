import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Alejandro Godoy Troncozo',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 191105479,
    population: 25
  },
  {
    name: 'Bryan Montecino Jara',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 191107861,
    population: 23
  },
  {
    name: 'Bryan Vidal Díaz',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 185227839,
    population: 24
  },
  {
    name: 'David Antonio Luna Cuevas',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 185225861,
    population: 24
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css'],
  providers: [DecimalPipe]
})
export class ListaPacientesComponent implements OnInit {

  countries$: Observable<Country[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;

  get countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
  }

}
