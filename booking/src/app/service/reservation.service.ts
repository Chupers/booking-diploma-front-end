import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalRootURL } from '../GlobalRootUrl';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  readonly URL = GlobalRootURL.BASE_API_URL +"reservation"

  constructor(private _httpClient : HttpClient) { }

  reserv(checkIn : string, checkOut: string, roomId : number, passportNumber : string) : Observable<any>{
    
    return this._httpClient.post(this.URL+"/reserv?checkIn="+checkIn+"&checkOut="+checkOut+"&roomId="+roomId+"&passportNumber="+passportNumber,null);
  }
}