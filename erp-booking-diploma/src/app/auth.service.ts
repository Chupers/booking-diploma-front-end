import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalRootURL } from './GlobalRootURL';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly URL = GlobalRootURL.BASE_API_URL +"login"

  constructor(private _httpClient : HttpClient) { }

  public login(username: String,password: String): Observable<HttpResponse<String>>{
    let body = {username : username, password : password}
    return this._httpClient.post<String>(this.URL,body,{observe:'response',responseType:'json'})
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
