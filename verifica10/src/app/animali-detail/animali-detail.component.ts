import { Component, Input, OnInit } from '@angular/core';
import { IAnimali } from '../ianimali';

@Component({
  selector: 'app-animali-detail',
  templateUrl: './animali-detail.component.html',
  styleUrls: ['./animali-detail.component.css']
})
export class AnimaliDetailComponent implements OnInit {
  @Input() animaleSelezionato!: IAnimali;
  constructor() { }

  ngOnInit(): void {
  }

}
