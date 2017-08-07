import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { NgStyle } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core';


@Component({
    selector: `top-tv`,
    templateUrl: `./top.ratedTV.html`,
    styleUrls: ['./top.ratedTV.css']


})

export class TopRatedTV {

    topRatedTv: Observable<any>;
    selectedTvId: number;

    constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        this.topRatedTv = this.route.paramMap
            .switchMap((params: ParamMap) => {
                // (+) before `params.get()` turns the string into a number                
                this.selectedTvId = +params.get('id');
                return this.service.getTopRated("Tv");
            });


    }

    getTvShowImage(tvShow:any){

        return this.service.getImage(tvShow.poster_path,this.service.configuration[3])

    }

    selectTvShow(tvShow:any){
         this.router.navigate(['/tvShow', tvShow.id]);
    }

}