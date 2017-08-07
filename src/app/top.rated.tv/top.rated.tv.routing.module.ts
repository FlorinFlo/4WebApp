import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRatedTV } from './top.ratedTV'

 import { TvShowDetail } from './tvShow.detail.component'


const tvsRoutes: Routes = [
  { path: 'topRatedTv', component: TopRatedTV },
   { path: 'tvShow/:id', component: TvShowDetail }
  
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
