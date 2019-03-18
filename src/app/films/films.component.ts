import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  filmList: Film[] = [{
    tytul: 'shrek',
    premiera: 2001,
    produkcja: 'USA',
    gatunek: ['komedia'],
    rezyser: 'unknown',
    aktorzy: ['unknown'],
    ocena: 6
  },
  {
    tytul: 'shrek 2',
    premiera: 2005,
    produkcja: 'USA',
    gatunek: ['komedia'],
    rezyser: 'unknown',
    aktorzy: ['unknown'],
    ocena: 6
  },
  {
    tytul: 'shrek 3',
    premiera: 2010,
    produkcja: 'USA',
    gatunek: ['komedia'],
    rezyser: 'unknown',
    aktorzy: ['unknown'],
    ocena: 6
  }
  ]

ngOnInit() {
  }

}
