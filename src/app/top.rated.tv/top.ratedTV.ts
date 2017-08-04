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
    styleUrls:['./top.ratedTV.css']


})

export class TopRatedTV{
    

}