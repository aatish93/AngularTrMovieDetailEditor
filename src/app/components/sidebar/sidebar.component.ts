import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  nodes = [];
  options = {};
  constructor(private list : MoviesService, private router: Router) { }

  ngOnInit() {
    this.nodes=this.nodeInit();
  }

  nodeInit(){
    let tempList=[],mList=this.list.getMoviesList(),cList=this.list.getCategoryList(),lList=this.list.getLanguagesList();
    for(let lIndex=0;lIndex<lList.length;lIndex++){
      tempList.push({
        id: lList[lIndex].id,
        name: lList[lIndex].name,
        key: 'language',
        children: []
      });
      for(let cIndex=0;cIndex<cList.length;cIndex++){
        tempList[lIndex].children.push({
          id: cList[cIndex].id,
          name: cList[cIndex].name,
          key: 'category',
          children: []
        });
        // for(let mIndex=0;mIndex<mList.length;mIndex++){
        //   if(mList[mIndex].category.id==cList[cIndex].id && mList[mIndex].language.id==lList[lIndex].id){
        //     tempList[lIndex].children[cIndex].children.push({
        //       id: mList[mIndex].id,
        //       name: mList[mIndex].name,
        //       children: []
        //     });
        //   }
        // }
      }
    }
    tempList.push({
      id:0,
      name: 'All Movies',
      key: 'all',
      children: []
    })
    //console.log(tempList)
    return tempList;
  }
  onEvent = ($event) => this.viewMovie($event.node);
  viewMovie(node){
    if(node.data.key=='category'){
      this.router.navigate(['/category',node.parent.data.id,'movie',node.data.id]);
    }
    if(node.data.key=='all'){
      this.router.navigate(['/category',0,'movie',0]);
    }
  }
}
