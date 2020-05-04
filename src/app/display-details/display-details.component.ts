import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieServiceService} from '../services/movie-service.service'

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent implements OnInit {

 myparam:number;
 movieDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute,public _MovieServiceService:MovieServiceService){}
  ngOnInit(){
    this._ActivatedRoute.params.subscribe((params) => this.myparam =params['id']);
    this._MovieServiceService.getMovies(1).subscribe(data => {this.movieDetails = data.results[this.myparam]}) 
  }
}
