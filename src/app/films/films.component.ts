import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { FilmListService } from '../film-list.service';

@ Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  filmList: Film[];
  constructor(private filmService: FilmListService) { }


ngOnInit() {
  this.filmService.getFilms().subscribe( films => {
    this.filmList = [];
    films.forEach( (f: any)=> {
      const data = f.payload.doc.data();
      const id = f.payload.doc.id;

      const newFilm = new Film();
      newFilm.id = id;
      newFilm.tytul = data.tytul;
      newFilm.premiera = data.premiera;
      newFilm.poster = data.poster;
      newFilm.ocena = data.ocena;
      this.filmList.push(newFilm);
    })
  });
  }

}
