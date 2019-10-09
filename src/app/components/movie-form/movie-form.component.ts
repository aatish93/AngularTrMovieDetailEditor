import { Component, OnInit, ViewChild} from '@angular/core';
import { MoviesService } from '../../services/movies.service'
import { FormsModule, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movieId: Object;
  categoryList: Object;
  languageList: Object;
  operation: Object;
  upd: Boolean;
  @ViewChild('f') form: any;
  constructor(private data:MoviesService, private route: ActivatedRoute, private router: Router) {
    this.categoryList=this.data.getCategoryList();
    this.languageList=this.data.getLanguagesList();
    this.route.params.subscribe( params => this.movieId = params.mid);
    this.route.params.subscribe( params => this.operation = params.opr);
  }

  ngOnInit() {
    if (this.operation=='update') this.upd=true; else this.upd=false;
  }

  log(x){
    console.log(x);
  }
  onSubmit() {
    let newMovie=JSON.parse(JSON.stringify(this.form.value).replace(/\\n/g, '').replace('  ',''));
    if (this.operation=='update'){
        if (newMovie.name != "" && newMovie.name !=null)
          this.data.setMovieName(this.movieId,newMovie.name);
        if (newMovie.category != "" && newMovie.category !=null)
          this.data.setMovieCategory(this.movieId,newMovie.category.split(':')[0],newMovie.category.split(':')[1]);
        if (newMovie.culture != "" && newMovie.culture !=null)
          this.data.setMovieCulture(this.movieId,newMovie.culture);
        if (newMovie.releasedate != "" && newMovie.releasedate !=null){
          this.data.setMovieRelYear(this.movieId,newMovie.releasedate.split('-')[0]);
          this.data.setMovieRelMonth(this.movieId,newMovie.releasedate.split('-')[1]);
        }
        if (newMovie.language != "" && newMovie.language !=null)
          this.data.setMovieLanguage(this.movieId,newMovie.language.split(':')[0],newMovie.language.split(':')[1]);
        //this.data.setMovieName(3,"movienewc");
        console.log(this.data.getMoviesList());
        this.form.reset();
        this.router.navigateByUrl('/');
    }
    if (this.operation=='insert'){
      let movie,maxId=this.data.getMaxMovieId();
      movie={
        id: maxId+1,
        name: newMovie.name,
        category: {
          id: parseInt(newMovie.category.split(':')[0]),
          name: newMovie.category.split(':')[1]
        },
        culture: newMovie.culture,
        releaseMonth: parseInt(newMovie.releasedate.split('-')[1]),
        releaseYear: parseInt(newMovie.releasedate.split('-')[0]),
        language: {
          id: parseInt(newMovie.language.split(':')[0]),
          name: newMovie.language.split(':')[1]
        }
      }
      this.data.insert(movie);
      this.router.navigateByUrl('/');
    }
  }

}
