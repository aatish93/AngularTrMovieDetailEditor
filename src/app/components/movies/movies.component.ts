import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies=[];
  constructor(private moviesService : MoviesService) {
    this.movies=moviesService.getMoviesList();
  }

  ngOnInit() {
  }

}
