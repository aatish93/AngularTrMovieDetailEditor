import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Object
  constructor(private list: MoviesService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.categories=this.list.getCategoryList();
  }

}
