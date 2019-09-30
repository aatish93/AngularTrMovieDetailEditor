import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: Object
  movieId: Object
  constructor(private data: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.movieId = params.mid)
  }

  ngOnInit() {
    this.details=this.data.getDetails(this.movieId)
  }

}
