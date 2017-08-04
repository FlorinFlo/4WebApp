import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { TopRatedMovies } from './top.rated.movies/top-rated-movies';
import { MovieDetail } from './top.rated.movies/movie.detail.component';
import { TopRatedTV } from './top.rated.tv/top.ratedTV';



const appRoutes: Routes = [
   
  { path: '', redirectTo: '/topRatedMovies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only


      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [


  ]
})
export class AppRoutingModule { }
