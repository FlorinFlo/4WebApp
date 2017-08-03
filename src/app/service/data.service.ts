import { HttpClient } from '@angular/common/http';
import * as moviedb from '../../../node_modules/themoviedbclient/themoviedbclient';


import { Injectable } from '@angular/core';
const apiKey = '7c18265ee04d56f2971a1ca5e5fe4460';
const topRatedMoviesRequest = 'https://api.themoviedb.org/3/movie/top_rated?api_key=7c18265ee04d56f2971a1ca5e5fe4460&language=en-US&page=1';
const configRequest = 'https://api.themoviedb.org/3/configuration?api_key=7c18265ee04d56f2971a1ca5e5fe4460';
// const topRatedTVShowsRequest=''

@Injectable()
export class DataService {



    public resultTopMovies: any[]=[];
    public resultConfig: string[]=[];
     tmdbclient = moviedb;
     tmdb = new this.tmdbclient('7c18265ee04d56f2971a1ca5e5fe4460');
     //moviePromise:Promise<any[]>=;

    constructor(private httpClient: HttpClient) { }



    getTopRatedMovies() {
      
           this.tmdb.call("/movie/top_rated", { external_source: "imdb_id" })
           .then((data) => {                
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

    getImage(poster_path:string,size:string){

        return this.tmdb.getImageUrl(poster_path,size)
    }

    getMovie(id: number | string) {
    return  this.tmdb.call("/movie/top_rated", { external_source: "imdb_id" })
      // (+) before `id` turns the string into a number
      .then(movies => movies['results'].find(movie => movie.id === +id));
  }


}