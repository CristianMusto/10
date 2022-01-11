import { Component, Input, OnInit } from '@angular/core';
import { AnimaliService } from '../animali.service';
import { IAnimali } from '../ianimali';

@Component({
  selector: 'app-animali',
  templateUrl: './animali.component.html',
  styleUrls: ['./animali.component.css'],
})
export class AnimaliComponent implements OnInit {

  @Input() isOpen!: boolean;

  animali!: IAnimali[];
  animaleSelezionato!: IAnimali;
  openAnimaliDetail: boolean = false;

  constructor(private animaliService: AnimaliService) { }

  ngOnInit(): void {
    this.getRemoteAnimali();
  }

  getRemoteAnimali(){
    this.animaliService.getRemoteAnimali()
        .subscribe(animali => this.animali = animali);
  }

  selectAnimaliDetail(animale: IAnimali){
    this.openAnimaliDetail = true;
    this.animaleSelezionato = animale;
  }

}
