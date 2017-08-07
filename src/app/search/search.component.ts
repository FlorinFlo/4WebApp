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
    isChecked: boolean = false;
    searchResult:Observable<any[]>;
    selectedId:number;
    titleSearch:string;
    beforeChecked:any;

    constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

    searchForString(event: KeyboardEvent) {
        let tempString: string = '';
        tempString = (<HTMLInputElement>event.target).value;
        if (tempString.length > 3) {
            if (this.isChecked) {
                console.log(this.selected+"is checked"+this.isChecked);
                // Search for selected -- movie or tv show
              this.searchResult= this.route.paramMap
                .switchMap((params: ParamMap) => {
                    // (+) before `params.get()` turns the string into a number
                    this.selectedId = +params.get('id');
                    return this.service.search(this.selected,tempString);
                });

            } else {
                 console.log(this.selected+"is checked"+this.isChecked+"multi");
                //multi search
               this.searchResult= this.route.paramMap
                .switchMap((params: ParamMap) => {
                    // (+) before `params.get()` turns the string into a number
                    this.selectedId = +params.get('id');
                    return this.service.search('multi',tempString);
                });
                
            }

            
        }else{
            this.searchResult=null;
        }



    }

    uncheck(event) {

        this.selected = event.target.value;
        if(this.beforeChecked==event.target){
            console.log(this.beforeChecked+">>> same"+event.target.value );
            this.isChecked = !this.isChecked;
        }else{
            console.log(this.beforeChecked+">>> diff"+ event.target.value);
            this.beforeChecked=event.target;
        }
       
        if (this.checked == event.target.value) {
            this.checked = false;
        }
        
        

    }



}