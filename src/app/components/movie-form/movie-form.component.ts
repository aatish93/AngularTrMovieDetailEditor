import { Component, OnInit, ViewChild} from '@angular/core';
import { MoviesService } from '../../services/movies.service'
import { FormsModule, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movieId: Object
  categoryList: Object
  languageList: Object
  @ViewChild('f') form: any;
  constructor(private data:MoviesService, private route: ActivatedRoute) {
    this.categoryList=this.data.getCategoryList();
    this.languageList=this.data.getLanguagesList();
    this.route.params.subscribe( params => this.movieId = params.mid);
  }

  ngOnInit() {}

  log(x){
    console.log(x);
  }
  onSubmit() {
    let editedMovie=JSON.parse(JSON.stringify(this.form.value).replace(/\\n/g, '').replace('  ',''));
    let catMovie=JSON.parse(JSON.stringify(this.form.value.category).replace(/\\n/g, '').replace('  ','')).name;
    console.log(catMovie);
      if (editedMovie.name != "" && editedMovie.name !=null)
        this.data.setMovieName(this.movieId,editedMovie.name);
      if (editedMovie.category != "" && editedMovie.category !=null)
        this.data.setMovieCategory(this.movieId,JSON.parse(JSON.stringify(editedMovie.category)).id,JSON.parse(JSON.stringify(editedMovie.category)).name);
      if (editedMovie.culture != "" && editedMovie.culture !=null)
        this.data.setMovieCulture(this.movieId,editedMovie.culture);
      if (editedMovie.releasedate != "" && editedMovie.releasedate !=null){
        this.data.setMovieRelYear(this.movieId,editedMovie.releasedate.split('-')[0]);
        this.data.setMovieRelMonth(this.movieId,editedMovie.releasedate.split('-')[1]);
      }
      if (editedMovie.language != "" && editedMovie.language !=null)
        this.data.setMovieLanguage(this.movieId,editedMovie.language.id,editedMovie.language.name);
      console.log(editedMovie);
      
      //this.data.setMovieName(3,"movienewc");
      console.log(this.data.getMoviesList());
      this.form.reset();
    }

}
