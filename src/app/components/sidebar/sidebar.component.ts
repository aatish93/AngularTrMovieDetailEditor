import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  languageList: Object;
  categoryList: Object;
  movieList: Object;
  constructor(private data: MoviesService) { }

  ngOnInit() {
    this.languageList=this.data.getLanguagesList();
  }
  initCategory(){
    this.categoryList=this.data.getCategoryList();
  }
  initMovies(cid,lid){
    this.movieList=this.data.getCategoryMovies(cid,lid);
  }

}
