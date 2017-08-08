import { HttpClient } from '@angular/common/http';
import * as moviedb from '../../../node_modules/themoviedbclient/themoviedbclient';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

const apiKey = '7c18265ee04d56f2971a1ca5e5fe4460';
const topRatedMovieCall = '/movie/top_rated';
const topRatedTvCall = '/tv/popular';
const configurationCall = '/configuration';
const movieDetailCall = '/movie/';
const tvDetailCall = '/tv/';
const searchCall="/search/";



@Injectable()
export class DataService {

    resultTop: any[] = [];
    resultConfig: string[] = [];
    resultSearch: any[] = [];
    configuration: any;

    tmdbclient = moviedb;
    tmdb = new this.tmdbclient(apiKey);

    constructor(private httpClient: HttpClient) {

        this.setConfiguration();

    }

    setConfiguration() {
        this.configuration = this.getConfiguration();
    }


    getTopRated(type: string) {
        let tempCall: string = "Movie"; //default value

        if (type == "Movie") {
            tempCall = topRatedMovieCall;
        } else if (type == "Tv") {
            tempCall = topRatedTvCall;
        }
        this.tmdb.call(tempCall, { external_source: "imdb_id" })
            .then((data) => {
                this.resultTop.length = 0;
                this.resultTop.push(...data.results);

            });

        return Promise.resolve(this.resultTop);

    }

    getConfiguration() {

        this.tmdb.call(configurationCall)
            .then((data) => {
                this.resultConfig.push(...data.images.poster_sizes);

            });
        return this.resultConfig;

    }

    getImage(poster_path: string, size: string) {
       
        if (size != null && poster_path != null) {

            return this.tmdb.getImageUrl(poster_path, size)
        }

    }

    getMovieOrTvShow(id: number | string, type: string) {

        let tempCall = "movie";
        if (type == "movie") {
            tempCall = topRatedMovieCall;
        } else if (type == "tvShow") {
            tempCall = topRatedTvCall;
        }
        return this.tmdb.call(tempCall, { external_source: "imdb_id" })
            // (+) before `id` turns the string into a number
            .then(moviesOrTvShows => moviesOrTvShows['results'].find(movieOrTvShow => movieOrTvShow.id === +id));
    }

    getDetail(movieId: number, type: string) {

        let tempcall: string = "movie";
        if (type == "movie") {
            tempcall = movieDetailCall;
        } else if (type == "tv") {
            tempcall = tvDetailCall;
        }
        return this.tmdb.call(tempcall + movieId).then((data) => {
            return data;
        })
    }

    search(type: string, searchString: string) {
       let searchType=searchCall+type;
        this.tmdb.call(searchType,{query:searchString})
            .then((data) => {
               this.resultSearch.length=0;
                this.resultSearch.push(...data['results']);

            });
        return Promise.resolve(this.resultSearch);

        
    }




}