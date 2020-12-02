import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalRootURL } from '../GlobalRootUrl';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly URL = GlobalRootURL.BASE_API_URL +"customer"

  constructor(private _httpClient : HttpClient) { }

  save(name : String,secondName : String,phone:String):Observable<any>{
    let body = {name : name, secondName : secondName, phone: phone}
    return this._httpClient.post(this.URL+"/save",body);
  }
}
