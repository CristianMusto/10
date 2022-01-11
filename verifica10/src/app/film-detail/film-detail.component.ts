import { Component, Input, OnInit } from '@angular/core';
import { IFilm } from '../ifilm';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  @Input() filmSelezionato!: IFilm;
  constructor() { }

  ngOnInit(): void {
  }

}
