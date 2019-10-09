import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Object;
  monthYearList: Object;
  catId: Object;
  lanId: Object;
  //searchText;
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
    this.monthYearList=this.moviesService.getMonthYearList(this.catId,this.lanId);
  }
}
