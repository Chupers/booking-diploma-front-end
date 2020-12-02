import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from '../entity/Accommodation';
import { GlobalRootURL } from '../GlobalRootURL';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  readonly URL = GlobalRootURL.BASE_API_URL+"rooms/";

  constructor(private _httpClient : HttpClient) { }

  save(roomNumber:String,roomDescription:String,roomCost:number,id :number):Observable<Accommodation>{
    let body = {roomNumber: roomNumber,roomDescription : roomDescription,roomCost:roomCost}
    return this._httpClient.post<Accommodation>(this.URL+"save?id="+id,body)
  }
}
