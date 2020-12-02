import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalRootURL } from '../GlobalRootUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL = GlobalRootURL.BASE_API_URL +"login"
  readonly URLSIGN = GlobalRootURL.BASE_API_URL +"user/signUpCustomer"
  
  constructor(private _httpClient : HttpClient) { }
  public login(username: String,password: String): Observable<HttpResponse<String>>{
    let body = {username : username, password : password}
    return this._httpClient.post<String>(this.URL,body,{observe:'response',responseType:'json'})
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public signUp(username: String,password: String) : Observable<any>{
    let body = {username : username, password : password}
    return this._httpClient.post(this.URLSIGN,body)
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
