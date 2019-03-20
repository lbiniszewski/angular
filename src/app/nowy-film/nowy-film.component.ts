import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilmListService } from 'src/app/film-list.service';

@ Component({
  selector: 'app-nowy-film',
  templateUrl: './nowy-film.component.html',
  styleUrls: ['./nowy-film.component.scss']
})
export class NowyFilmComponent implements OnInit {

  nowyFilm: FormGroup;

  constructor(private fb: FormBuilder, private filmService:FilmListService) { }

  ngOnInit() {
    this .nowyFilm = this .fb.group({
      tytul:[''],
      opis: [''],
      premiera: [''],
      poster: [''],
      ocena: [''],
    })
  }

  onDodajBtnClick(){
    this.filmService.addFilm(this.nowyFilm.value);
  }

}
