import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { NgStyle } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from '../app.component';





@Component({
    selector: `search`,
    templateUrl: `./search.component.html`,
    styleUrls: ['./search.component.css']

})

export class SeachdMoviesOrTvShows {

    checked;
    selected: string = ' ';
    typeIsChecked: boolean = false;
    searchResult: Observable<any[]>;
    selectedId: number;
    beforeChecked: any;
    count: number = 1;
    searchString: string = "";
    p: string =' 1';

    constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

    pageChange(event) {
        this.p = event;

        this.router.navigate(['search'], { queryParams: { page: this.p } });

    }
    ngOnInit(){

    }

    searchForString(event: KeyboardEvent) {
        this.searchString = (<HTMLInputElement>event.target).value;
        this.getMapRouting(this.searchString, this.typeIsChecked);

    }

   

    selectOrDeselectSearchType(event) {

        this.selected = event.target.value;

        if (this.beforeChecked == event.target) {
            this.count++;
        } else {

            this.beforeChecked = event.target;
            this.count = 1;
        }

        if (this.checked == event.target.value) {
            this.checked = false;
        }

        if (this.count % 2 == 0) {
            this.typeIsChecked = false;
        } else {
            this.typeIsChecked = true;
        }

        this.getMapRouting(this.searchString, this.typeIsChecked);

    }


    getMapRouting(searchString: string, specific: boolean) {

        let typeOfSearch = this.selected;

        if (!specific) {
            typeOfSearch = "multi";
        }

        if (this.searchString.length > 3) {

            this.searchResult = this.route.paramMap
                .switchMap((params: ParamMap) => {
                    // (+) before `params.get()` turns the string into a number
                    this.selectedId = +params.get('id');
                    return this.service.search(typeOfSearch, searchString);
                });

            



        } else {
            this.searchResult = null;
        }

    }

    getImage(result:any){

        if(this.service.getImage(result.poster_path, this.service.configuration[3])==null){
            return "https://pvsmt99345.i.lithium.com/t5/image/serverpage/image-id/10546i3DAC5A5993C8BC8C?v=1.0";//to do search image url localy
        }
        return this.service.getImage(result.poster_path, this.service.configuration[3]);
    }

}

// For routing through pages in pagination 
// this.route.paramMap
//       .map(params => params.get('page'))
//       .subscribe(page => this.config.currentPage = page);