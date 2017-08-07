import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { NgStyle } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core';


@Component({
    selector: `tvShow-detail`,
    templateUrl: `./tvShow.detail.component.html`,
    styleUrls:['./tvShow.detail.component.css']


})

export class TvShowDetail implements OnInit {

    tvShow: any;
    tvShowDetails: any;
    calledGetTvShowDetail: boolean = false;

    constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getMovieOrTvShow(params.get('id'),"tvShow")).
            subscribe((tvshow: any) => this.tvShow = tvshow);

    }

    ngDoCheck() {

        console.log(this.tvShowDetails);
        if (this.tvShow != null && !this.calledGetTvShowDetail) {            
             this.service.getDetail(this.tvShow['id'],"tv").then((data) => {
                 this.tvShowDetails = data;                
             });
             this.calledGetTvShowDetail=true;
        }
            
    }


    goBackToTopRated() {
        let tvShowId = this.tvShow ? this.tvShow.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/topRatedTv', { id: tvShowId, foo: 'foo' }]);
    }
    

}