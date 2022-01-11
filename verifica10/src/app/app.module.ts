import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimaliComponent } from './animali/animali.component';
import { AnimaliDetailComponent } from './animali-detail/animali-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FilmComponent } from './film/film.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PiattiComponent } from './piatti/piatti.component';
import { PiattiDetailComponent } from './piatti-detail/piatti-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaliComponent,
    AnimaliDetailComponent,
    DashboardComponent,
    FilmComponent,
    FilmDetailComponent,
    PiattiComponent,
    PiattiDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
