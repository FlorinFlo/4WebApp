import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { NgStyle } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from '../app.component';



@Component({
    selector: `top-movies`,
    templateUrl: `./top-rated-movies.html`,
    styleUrls: ['./top-rated-movies.css']

})



export class TopRatedMovies implements OnInit {


    listOfMovies: Observable<any[]>;
    private selectedMovieId: number;
   
   

// private appcomponetn: AppComponen
    constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        if (this.listOfMovies == null) {


            this.listOfMovies = this.route.paramMap
                .switchMap((params: ParamMap) => {
                    // (+) before `params.get()` turns the string into a number
                   
                    this.selectedMovieId = +params.get('id');
                    return this.service.getTopRated("Movie");
                });

        }
        



    }

    

    selectMovie(movie: any) {

        this.router.navigate(['/movie', movie.id]);

    }

    getImage(movie: any) {

        return this.service.getImage(movie.poster_path, this.service.configuration[3]);
    }





}