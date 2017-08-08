import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { NgStyle } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core';


@Component({
    selector: `movie-detail`,
    templateUrl: `./movie.detail.component.html`,
    styleUrls:['./movie.detail.component.css']


})

export class MovieDetail implements OnInit {

    movie: any;
    movieDetails: any;
    calledGetMovieDetail: boolean = false;

    constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        
        this.route.paramMap
            .switchMap((params: ParamMap) =>
           
                this.service.getMovieOrTvShow(params.get('id'),"movie")).
            subscribe((movie: any) => this.movie = movie);

    }

    ngDoCheck() {


        if (this.movie != null && !this.calledGetMovieDetail) {            
             this.service.getDetail(this.movie['id'],"movie").then((data) => {
                 this.movieDetails = data;                
             });
             this.calledGetMovieDetail=true;
        }
            
    }


    goBackToTopRated() {
        let movieId = this.movie ? this.movie.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/topRatedMovies', { id: movieId, foo: 'foo' }]);
    }
    

}