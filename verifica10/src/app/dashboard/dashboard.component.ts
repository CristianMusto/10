import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('dissolvenzaA', [
      transition(':enter', [
        query('app-animali #an', [
          style({ transform: 'translateY(-100px)', opacity: '0' }), animate('1s', style({ transform: 'translateY(0%)', opacity: '1' }))
        ])
      ]),
      transition(':leave', [
        query('app-animali #an', [
          style({opacity: '1' }), animate('1s', style({ opacity: '0' }))
        ]),
      ])]
    ),
    trigger('dissolvenzaF', [
      transition(':enter', [
        query('app-film #fi', [
          style({ transform: 'translateY(-100px)', opacity: '0' }), animate('1s', style({ transform: 'translateY(0%)', opacity: '1' }))
        ])
      ]),
      transition(':leave', [
        query('app-film #fi', [
          style({ opacity: '1' }), animate('1s', style({ opacity: '0' }))
        ]),
      ])]
    ),

    trigger('dissolvenzaP', [
      transition(':enter', [
        query('app-piatti #pi', [
          style({ transform: 'translateY(-100px)', opacity: '0' }), animate('1s', style({ transform: 'translateY(0%)', opacity: '1' }))
        ])
      ]),
      transition(':leave', [
        query('app-piatti #pi', [
          style({ opacity: '1' }), animate('1s', style({ opacity: '0' }))
        ]),
      ])]
    )
  ]
})
export class DashboardComponent implements OnInit {

  openAnimali: boolean = false;
  openFilm: boolean = false;
  openPiatti: boolean = false;
  closeWelcome: boolean = true;
  anAn : boolean = false;

  constructor() { }


  ngOnInit(): void {
  }

  selectAnimali(){
    if(this.openAnimali===true){
      this.openAnimali = false;
      setTimeout(() => {
        this.closeWelcome = true;
      }, 1000)
    }else{
      this.closeWelcome = false;
      this.openPiatti = false;
      this.openAnimali = true;
      this.openFilm = false;
    }
  }

  selectFilm(){
    if(this.openFilm===true){
      setTimeout(() => {
        this.closeWelcome = true;
      }, 1000)
      this.openFilm = false;
    }else{
      this.closeWelcome = false;
      this.openPiatti = false;
      this.openAnimali = false;
      this.openFilm = true;
    }
  }

  selectPiatto(){
    if (this.openPiatti === true) {
      setTimeout(() => {
        this.closeWelcome = true;
      }, 1000)
      this.openPiatti = false;
    } else {
      this.closeWelcome = false;
      this.openFilm = false;
      this.openAnimali = false;
      this.openPiatti = true;
    }
  }

}


