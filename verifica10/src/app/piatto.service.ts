import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPiatto } from './ipiatto';


@Injectable({
  providedIn: 'root'
})
export class PiattoService {

  private urlPiatti = "/api/piatti"

  constructor(private http: HttpClient) { }

  getRemoteFilm() {
    return this.http.get<IPiatto[]>(this.urlPiatti);
  }
}