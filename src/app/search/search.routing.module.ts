import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { SeachdMoviesOrTvShows } from './search.component';
// import { MovieDetail } from './movie.detail.component'


const moviesRoutes: Routes = [
  { path: 'search', component: SeachdMoviesOrTvShows }
//   { path: 'movie/:id', component: MovieDetail }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
