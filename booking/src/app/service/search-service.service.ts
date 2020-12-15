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

  searchAccommodationByDetailsSearch(value:string,minPrice:string,maxPrice:string,countStar:string):Observable<Accommodation[]>{
    
    if(value.length == 0){
      console.log("KITLG:ALDG:LDGMD:KLMGDKL:")
      value = "";
    }
    if(minPrice.length == 0){
      minPrice = "";
    }
    if(maxPrice.length == 0){
      maxPrice = ""
    }
    if(countStar.length == 0){
      countStar = ""
    }
    return this._httpClient.get<Accommodation[]>(this.URL+"searchDetails?value="+value+"&minPrice="+minPrice+"&maxPrice="+maxPrice+"&countStar="+countStar)
  }
}
