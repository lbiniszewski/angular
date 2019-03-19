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
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "lista"
  }
];

@ NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
