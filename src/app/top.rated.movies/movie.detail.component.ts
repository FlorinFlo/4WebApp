import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { NgStyle } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: `movie-detail`,
    templateUrl: `./movie.detail.component.html`
    

})
export class MovieDetail implements OnInit {

    movie:any;

constructor(private service: DataService,private route: ActivatedRoute,  private router: Router ){

}

    ngOnInit(){
       this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getMovie(params.get('id'))).
        subscribe((movie:any)=>this.movie=movie);
    }
}