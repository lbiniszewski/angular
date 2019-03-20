import { NowyFilmComponent } from './nowy-film/nowy-film.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WyszukajComponent } from './wyszukaj/wyszukaj.component';
import { FilmsComponent } from './films/films.component';


const routes: Routes = [
  {
    path: "wyszukaj",
    component: WyszukajComponent
  },
  {
    path: "lista",
    component: FilmsComponent
  },
  // {
  //   path: "",
  //   pathMatch: 'full',
  //   redirectTo: "lista"
  // },
  {
    path: "nowy",
    component: NowyFilmComponent
  }
];

@ NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
