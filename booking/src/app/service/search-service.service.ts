import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from '../entity/Accommodation';
import { GlobalRootURL } from '../GlobalRootUrl';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {


  readonly URL = GlobalRootURL.BASE_API_URL +"search/"

  constructor(private _httpClient : HttpClient) { }

  getCityList():Observable<String[]>{
    return this._httpClient.get<String[]>(this.URL+"getPopularCity")
  }

  getAccommadationByBasicSearch(value:String):Observable<Accommodation[]>{
    return this._httpClient.get<Accommodation[]>(this.URL+"searchByString?value="+value)
  }

  getAccommodationById(id:number):Observable<Accommodation>{
    return this._httpClient.get<Accommodation>(GlobalRootURL.BASE_API_URL+"accommodation/getById?id="+id)
  }
}
