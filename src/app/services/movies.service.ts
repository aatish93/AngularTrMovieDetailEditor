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
        category: 1,
        releaseMonth: 'Jan',
        releaseYear: 1993,
        culture: 'classical',
        language: 3
      },
      {
        id: 2,
        name: 'movieB',
        category: 2,
        releaseMonth: 'Dec',
        releaseYear: 1996,
        culture: 'Traditional',
        language: 2
      }
      ,
      {
        id: 3,
        name: 'movieC',
        category: 3,
        releaseMonth: 'Nov',
        releaseYear: 1993,
        culture: 'Western',
        language: 1
      }
      ,
      {
        id: 4,
        name: 'movieD',
        category: 3,
        releaseMonth: 'April',
        releaseYear: 1995,
        culture: 'Western',
        language: 1
      }
    ]
   }
   getDetails(movieId){
     return this.dataList=this.getMoviesList().filter(item => item.id==movieId);
   }
   getCategoryMovies(catId,lanId){
     let tempList=[]
     for(let i=0;i<this.getMoviesList().length;i++){
        console.log('cat: '+this.getMoviesList()[i].category+' '+catId)
       console.log('lan: '+this.getMoviesList()[i].language+' '+lanId)
      if(this.getMoviesList()[i].category==catId && this.getMoviesList()[i].language==lanId){
        console.log(this.getMoviesList()[i].category)
        tempList.push(this.getMoviesList()[i])
      }
     }
    return this.dataList=tempList//(this.getMoviesList().filter(item => (item.category==catId) && (item => item.language==lanId)));
  }
}
