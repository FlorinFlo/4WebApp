import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopRatedMovies } from './top-rated-movies';
import { MovieDetail } from './movie.detail.component'


const moviesRoutes: Routes = [
  { path: 'topRatedMovies', component: TopRatedMovies },
  { path: 'movie/:id', component: MovieDetail }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule { }
