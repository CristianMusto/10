import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { IFilm } from '../ifilm';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film: IFilm[] = [];
  filmSelezionato!: IFilm;
  openFilmDetail: boolean = false;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getRemoteFilm();
  }

  getRemoteFilm(){
    this.filmService.getRemoteFilm().subscribe(res => this.film = res);
  }

  selectFilmDetail(f: IFilm){
    this.openFilmDetail = true;
    this.filmSelezionato = f;
  }

}
