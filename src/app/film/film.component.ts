import { Film } from './../film.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

}
