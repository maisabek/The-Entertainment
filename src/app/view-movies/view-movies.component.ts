import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../services/movie-service.service'
@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss']
})
export class ViewMoviesComponent implements OnInit{
   movieContainer:any[];
   currentPageNumber:number=1;
   pages:number[]=[1,2,3,4,5,6,7,8];
   imagePrefix:string="https://image.tmdb.org/t/p/w500/";


    constructor(public _MovieService:MovieServiceService) {
    _MovieService.getMovies(this.currentPageNumber).subscribe(i => {
     this.movieContainer=i.results;
    }, err => {} )
  }
  changePage(num){
    this.currentPageNumber = num;
   this._MovieService.getMovies(this.currentPageNumber).subscribe(i => {
      this.movieContainer=i.results;
    }, err => {} )
  }

  ngOnInit(){}

}
