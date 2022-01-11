import { Component, Input, OnInit } from '@angular/core';
import { IPiatto } from '../ipiatto';

@Component({
  selector: 'app-piatti-detail',
  templateUrl: './piatti-detail.component.html',
  styleUrls: ['./piatti-detail.component.css']
})
export class PiattiDetailComponent implements OnInit {
  @Input() piattoSelezionato!: IPiatto;
  constructor() { }

  ngOnInit(): void {
  }

}
