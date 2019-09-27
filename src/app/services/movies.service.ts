import { Injectable } from '@angular/core';
import {MoviesComponent} from '../components/movies/movies.component';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesList=[];
  getMovieList(){
    return this.moviesList;
  }
  constructor() {
    this.moviesList=[
      {
        movieId: 1,
        movieName: 'movieA',
        category: 'catA',
        releaseMonth: 'Jan',
        releaseYear: 1993,
        culture: 'classical',
        language: 'Tamil'
      },
      {
        movieId: 2,
        movieName: 'movieB',
        category: 'catB',
        releaseMonth: 'Mar',
        releaseYear: 1995,
        culture: 'Western',
        language: 'English'
      }
      ,
      {
        movieId: 3,
        movieName: 'movieC',
        category: 'catB',
        releaseMonth: 'Apr',
        releaseYear: 1995,
        culture: 'Western',
        language: 'English'
      }
      ,
      {
        movieId: 4,
        movieName: 'movieD',
        category: 'catB',
        releaseMonth: 'Dec',
        releaseYear: 1997,
        culture: 'Traditional',
        language: 'Hindi'
      }
    ]
   }
}
