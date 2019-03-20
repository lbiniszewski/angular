import { Injectable } from '@angular/core';
import { Film } from './film.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilmListService {

  //filmList: Film[] = []


  constructor(private firestore: AngularFirestore) { }

  getFilms(){
    return this.firestore.collection('films').snapshotChanges();
  }

  addFilm(f:any){
    const el = {...f};
    this.firestore.collection('films').add(el);
  }

  removeFilm(id: string){
    this.firestore.doc('films/' + id).delete();
  }
}
