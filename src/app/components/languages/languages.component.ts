import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { format } from 'url';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Object;

  constructor(private list : MoviesService) { }

  ngOnInit() {
    this.languages = this.list.getLanguagesList()
  }
}
