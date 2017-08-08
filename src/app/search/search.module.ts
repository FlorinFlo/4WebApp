import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SeachdMoviesOrTvShows } from "./search.component";
//import { TopRatedMovies } from './top-rated-movies';
import { NgModule } from '@angular/core';
import { DataService } from '../service/data.service';
import { SearchRoutingModule } from "./search.routing.module";
// import { MovieRoutingModule } from './top-rated.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
    declarations: [
        SeachdMoviesOrTvShows
       
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        NgxPaginationModule,
        SearchRoutingModule,
        
       



    ],
    providers: [DataService],

})
export class SearchComponent { }

