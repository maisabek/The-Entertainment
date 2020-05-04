import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {observable,Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
 pageNumber:number;
  constructor(public _HttpClient:HttpClient) { }
  getMovies(pageNumber):Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=a631b24dc97d4274715c5fa6b5a60321&page="+pageNumber);
  }
}
