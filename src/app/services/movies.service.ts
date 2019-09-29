import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private dataList=[]
  constructor(            ) { }

  getCategoryList(){
    return this.dataList=[
      {
        id: '1',
        name: 'horror'
      },
      {
        id: '2',
        name: 'action'
      },
      {
        id: '3',
        name: 'romance'
      }
    ]}
  getLanguagesList(){
    return this.dataList=[
      {
          id: 1,
          name: 'English',
      },
      {
        id: 2,
        name: 'Tamil',
      },
      {
        id: 3,
        name: 'Hindi',
      }
    ]}
  getMoviesList(){
    return this.dataList=[
      {
        id: 1,
        name: 'movieA',
        category: 'horror',
        releaseMonth: 'Jan',
        releaseYear: 1993,
        culture: 'classical',
        language: 'hindi'
      },
      {
        id: 2,
        name: 'movieB',
        category: 'action',
        releaseMonth: 'Dec',
        releaseYear: 1996,
        culture: 'Traditional',
        language: 'tamil'
      }
      ,
      {
        id: 3,
        name: 'movieC',
        category: 'romance',
        releaseMonth: 'Nov',
        releaseYear: 1993,
        culture: 'Western',
        language: 'english'
      }
      ,
      {
        id: 4,
        name: 'movieD',
        category: 'romance',
        releaseMonth: 'April',
        releaseYear: 1995,
        culture: 'Western',
        language: 'english'
      }
    ]
   }
   getDetails(movieId){
     return this.dataList=this.getMoviesList().filter(item => item.id==movieId);
   }
}
