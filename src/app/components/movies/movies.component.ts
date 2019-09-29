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
  movies: Object
  catId: Object
  lanId: Object
  constructor(private moviesService : MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.catId = params.cid
    );
    this.route.params.subscribe(
      params => this.lanId = params.lid
    );
  }

  ngOnInit() {
    this.movies=this.moviesService.getCategoryMovies(this.catId,this.lanId);
  }

}
