import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TopRatedTV } from './top.ratedTV';
// import { TopRatedMovies } from './top-rated-movies';
import { NgModule } from '@angular/core';
import { DataService } from '../service/data.service';
import { TVRoutingModule } from './top.rated.tv.routing.module';
// import { MovieRoutingModule } from './top-rated.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { TvShowDetail } from './tvShow.detail.component';


@NgModule({
    declarations: [
        TopRatedTV,
        TvShowDetail

    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        TVRoutingModule



    ],
    providers: [DataService],

})
export class TopRatedTVComponent { }