import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRatedTV } from './top.ratedTV'

// import { MovieDetail } from './movie.detail.component'


const tvsRoutes: Routes = [
  { path: 'topRatedTv', component: TopRatedTV }
//   { path: 'movie/:id', component: MovieDetail }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(tvsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TVRoutingModule { }
