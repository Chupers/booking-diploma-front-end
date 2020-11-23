import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalRootURL } from '../GlobalRootURL';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  readonly URL = GlobalRootURL.BASE_API_URL +"employer"
  constructor(private _httpClient : HttpClient) { }

  createEmployer(name : String, secondName: String, phone: String): Observable<any>{
    let body = {name: name,secondName : secondName,phone: phone}
      return this._httpClient.post(this.URL+"/save",body);
  }
}
