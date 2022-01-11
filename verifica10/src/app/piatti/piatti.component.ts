import { Component, OnInit } from '@angular/core';
import { PiattoService } from '../piatto.service';
import { IPiatto } from '../ipiatto';

@Component({
  selector: 'app-piatti',
  templateUrl: './piatti.component.html',
  styleUrls: ['./piatti.component.css']
})
export class PiattiComponent implements OnInit {
  piatti: IPiatto[] = [];
  piattoSelezionato!: IPiatto;
  openPiattoDetail: boolean = false;

  constructor(private piattoService : PiattoService) { }

  ngOnInit(): void {
    this.getRemotePiatto();
  }

  getRemotePiatto() {
    this.piattoService.getRemoteFilm().subscribe(res => this.piatti = res);
  }

  selectPiattoDetail(p: IPiatto) {
    this.openPiattoDetail = true;
    this.piattoSelezionato = p;
  }

}
