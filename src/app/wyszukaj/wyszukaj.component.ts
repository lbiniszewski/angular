import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Film } from '../film.model';

@ Component({
  selector: 'app-wyszukaj',
  templateUrl: './wyszukaj.component.html',
  styleUrls: ['./wyszukaj.component.scss']
})
export class WyszukajComponent implements OnInit {

  searchResults: Film[];
  searchString: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onWyszukajClick(search:string){
    console.log(search);
    this.searchString = search;
    const searchURL = environment.movieDBURL
    + '/search/movie'
    + '?query=' + search
    + '&api_key=' + environment.movieDBApiKey
    this.http
    .get<any>(searchURL)
    .subscribe( ret => {
      console.log(ret);
      this.searchResults = ret.results.map( el => {
        const film: Film = new Film();
        film.tytul = el.title;
        film.produkcja = el.orginal_language;
        film.rezyser = '';
        film.premiera = el.release_date;
        film.ocena= el.vote_average;
        film.gatunek = el.genre_ids;
        film.aktorzy = [];
        film.opis = el.overview;
        film.poster = environment.movieDBImgUrl + el.poster_path;
        return film;
      })
    })
  }
}
