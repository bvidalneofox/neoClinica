import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Litzy Avello Rojas',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 191105479,
    population: 'Medicina General'
  },
  {
    name: 'Fernando Rojas Cardenas',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 191107861,
    population: 'Nutricionista'
  },
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
  });
}

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css'],
  providers: [DecimalPipe]
})
export class ListaMedicosComponent implements OnInit {

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
