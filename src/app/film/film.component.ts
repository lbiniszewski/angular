import { FilmListService } from './../film-list.service';
import { Film } from './../film.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film: Film;

  constructor(private filmservice: FilmListService, private snackBar: MatSnackBar) { }

  onZapiszClick(){
    this.filmservice.addFilm(this.film);
    this.snackBar.open(
      'Film dodany do bazy',
      'Ok',
      {
      duration: 2000,
      }
    );
  }

  onUsunClick(){
    this.filmservice.removeFilm(this.film.id);
  }

  ngOnInit() {
  }

}
