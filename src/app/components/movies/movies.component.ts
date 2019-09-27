import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;
  constructor(moviesService : MoviesService) {
    this.movies=moviesService.getMovieList();
  }

  ngOnInit() {
  }

}
