import { HttpClient } from '@angular/common/http';
import * as moviedb from '../../../node_modules/themoviedbclient/themoviedbclient';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


import { Injectable } from '@angular/core';

const apiKey = '7c18265ee04d56f2971a1ca5e5fe4460';


@Injectable()
export class DataService {

    public resultTopMovies: any[] = [];
    public resultConfig: string[] = [];
    public movieDetails: Observable<any> = new Observable<any>();

    tmdbclient = moviedb;
    tmdb = new this.tmdbclient(apiKey);


    constructor(private httpClient: HttpClient) { }



    getTopRatedMovies() {

        this.tmdb.call("/movie/top_rated", { external_source: "imdb_id" })
            .then((data) => {
                this.resultTopMovies.length = 0;
                this.resultTopMovies.push(...data.results);

            });

        return Promise.resolve(this.resultTopMovies);

    }

    getConfiguration() {

        this.tmdb.call("/configuration")
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

    getMovie(id: number | string) {
        return this.tmdb.call("/movie/top_rated", { external_source: "imdb_id" })
            // (+) before `id` turns the string into a number
            .then(movies => movies['results'].find(movie => movie.id === +id));
    }

    getMovieDetail(movieId: number) {

        return this.tmdb.call("/movie/" + movieId).then((data) => {
            return data;
        })
    }


}