import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TopRatedMovies } from './top-rated-movies';
import { NgModule } from '@angular/core';
import { DataService } from '../service/data.service';
import { MovieRoutingModule } from './top-rated.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MovieDetail } from './movie.detail.component';


@NgModule({
    declarations: [
        TopRatedMovies,
        MovieDetail,       

    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        MovieRoutingModule      


    ],
    providers: [DataService],

})
export class TopRatedMoviesComponent { }

