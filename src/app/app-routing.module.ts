import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagesComponent } from './components/languages/languages.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailsComponent } from './components/details/details.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
const routes: Routes = [
  {
    path: '',
    component: LanguagesComponent
  },
  {
    path: 'category/:lid',
    component: CategoriesComponent
  },
  {
    path: 'category/:lid/movie/:cid',
    component: MoviesComponent
  }
  ,
  {
    path: 'category/:lid/movie/:cid/details/:mid',
    component: DetailsComponent
  },
  {
    path: 'category/:lid/movie/:cid/details/:mid/update',
    component: MovieFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
