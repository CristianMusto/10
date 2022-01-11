import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnimali } from './ianimali';

@Injectable({
  providedIn: 'root'
})
export class AnimaliService {

  private urlAnimali = "/api/animali";

  constructor(private http: HttpClient) { }

  getRemoteAnimali(){
    return this.http.get<IAnimali[]>(this.urlAnimali);
  }
}
