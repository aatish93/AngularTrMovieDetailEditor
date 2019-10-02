import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  categoryList: Object
  languageList: Object
  constructor(private data:MoviesService) {
    this.categoryList=this.data.getCategoryList();
    this.languageList=this.data.getLanguagesList();
  }

  ngOnInit() {}

  log(x){
    console.log(x);
  }

}
