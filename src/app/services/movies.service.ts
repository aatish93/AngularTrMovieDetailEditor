import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private dataList=[]
  constructor() {
    this.dataList=[
      {
        id: 1,
        name: 'movieA',
        category: {
          id: '1',
          name: 'horror'
        },
        releaseMonth: 'Jan',
        releaseYear: 1993,
        culture: 'classical',
        language: {
          id: 3,
          name: 'Hindi'
        }
      },
      {
        id: 2,
        name: 'movieB',
        category: {
          id: '2',
          name: 'action'
        },
        releaseMonth: 'Dec',
        releaseYear: 1996,
        culture: 'Traditional',
        language: {
          id: 2,
          name: 'Tamil'
        }
      }
      ,
      {
        id: 3,
        name: 'movieC',
        category: {
          id: '3',
          name: 'romance'
        },
        releaseMonth: 'Nov',
        releaseYear: 1993,
        culture: 'Western',
        language: {
            id: 1,
            name: 'English'
        }
      }
      ,
      {
        id: 4,
        name: 'movieD',
        category: {
          id: '3',
          name: 'romance'
        },
        releaseMonth: 'Apr',
        releaseYear: 1995,
        culture: 'Western',
        language: {
            id: 1,
            name: 'English'
        }
      }
    ]
  }

  getMoviesList(){
    return this.dataList;
  }
  getCategoryList(){
    let tempList=[];
    for(let i=0;i<this.dataList.length;i++){
      if((tempList.filter(item => (item.id==this.dataList[i].category.id)).length == 0)){
        tempList.push({
          id: this.dataList[i].category.id,
          name: this.dataList[i].category.name
        })
      }
     }
    return tempList;
  }
  getLanguagesList(){let tempList=[];
    for(let i=0;i<this.dataList.length;i++){
      if((tempList.filter(item => (item.id==this.dataList[i].language.id)).length == 0)){
        tempList.push({
          id: this.dataList[i].language.id,
          name: this.dataList[i].language.name
        })
      }
     }
     console.log(tempList);
    return tempList;
  }
  getDetails(movieId){
     return this.dataList.filter(item => item.id==movieId);
  }
  getCategoryMovies(catId,lanId){
     let tempList=[];
     for(let i=0;i<this.dataList.length;i++){
      if(this.dataList[i].category.id==catId && this.dataList[i].language.id==lanId){
        tempList.push(this.dataList[i])
      }
     }
    return tempList//(this.dataList.filter(item => (item.category==catId) && (item => item.language==lanId)));
  }
  getMonthYearList(catId,lanId){
    let tempList=[];
    let moviesList=this.getCategoryMovies(catId,lanId);
    for(let i=0;i<moviesList.length;i++){
      if((tempList.filter(item => (item.month==moviesList[i].releaseMonth)).length == 0 && (tempList.filter(item => (item.year==moviesList[i].releaseYear).length == 0)){
        tempList.push({
          month: moviesList[i].releaseMonth,
          year: moviesList[i].releaseYear
        })
      }
     }
     return tempList;
  }
}
