import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../entity/Employer';
import { GlobalRootURL } from '../GlobalRootURL';


@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  readonly URL = GlobalRootURL.BASE_API_URL;
  constructor(private _httpClient : HttpClient) { }

  createEmployer(name : String, secondName: String, phone: String): Observable<any>{
    let body = {name: name,secondName : secondName,phone: phone}
      return this._httpClient.post(this.URL+"employer/save",body);
  }

  createOrganization(name : String, secondName: String, phone: String,organizationName:String): Observable<any>{
    let body = {name: name,secondName : secondName,phone: phone}
    return this._httpClient.post(this.URL+"organization/save?orgName="+organizationName,body)
  }

  getAllEmployer():Observable<Employer[]>{
    return this._httpClient.get<Employer[]>(this.URL+"employer/getAllInOrg")
  }
}
