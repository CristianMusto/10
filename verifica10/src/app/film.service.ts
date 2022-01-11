import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilm } from './ifilm';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private urlFilm = "/api/film"

  constructor(private http: HttpClient) { }

  getRemoteFilm(){
    return this.http.get<IFilm[]>(this.urlFilm);
  }
}
