import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TopRatedMoviesComponent } from './top.rated.movies/top.rated.module';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './not-found';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetail } from './top.rated.movies/movie.detail.component';
import { TopRatedTVComponent } from './top.rated.tv/top.rated.tv.module';
import { SearchComponent } from './search/search.module';






@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TopRatedMoviesComponent,
    TopRatedTVComponent,
    SearchComponent,
    RouterModule,
    AppRoutingModule
  ],
  providers: [RouterModule],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
