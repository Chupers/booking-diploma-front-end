import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalRootURL } from '../GlobalRootURL';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  readonly URL = GlobalRootURL.BASE_API_URL +"user/signUp"
  constructor(private _httpClient : HttpClient) { }

  signUp(username: String,password: String) : Observable<any>{
    let body = {username : username, password : password}
      return this._httpClient.post(this.URL,body);
  }
}
export class SignUpUserInfo{
  username : String;
  firstname:String;
  secondname: String;
  phone: String;
  password : String;
  constructor(username : String,firstname : String,secondname: String, phone: String,password : String){
    this.username = username;
    this.firstname = firstname;
    this.secondname = secondname;
    this.phone = phone;
    this.password = password;
  }
}
