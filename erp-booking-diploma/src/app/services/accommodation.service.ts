import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalRootURL } from '../GlobalRootURL';
import { TreeDataItem } from '../hotel-manage-base/hotel-manage-base.component';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  readonly URL = GlobalRootURL.BASE_API_URL +"accommodation/"
  constructor(private _httpClient : HttpClient) { }

  createNew() : Observable<any>{
    return this._httpClient.post(this.URL+"save",null)
  }

  loadImage(imageId:String,accommodationId:String): Observable<any>{
    return this._httpClient.put(this.URL+"loadPhotoByIdGoogle?id="+accommodationId+"&photoId="+imageId,null)
  }

  saveCharacteristic(accommodationId : number, data : TreeDataItem[]) : Observable<any>{
    let body = data
    return this._httpClient.post(this.URL+"saveCharacteristic?id="+accommodationId,body);
  }

  updateBasicInfo(accommodationName : String,
    accommodationCountry : String, 
    accommodationCity: String,
    accommodationStreet: String,
    accommodationDesc: String,
    accommodationId : number
  ) : Observable<any>
  {
    let body = {accommodationName: accommodationName,
      accommodationCountry : accommodationCountry,
      accommodationCity : accommodationCity,
      accommodationStreet: accommodationStreet,
      accommodationDesc:accommodationDesc}

    return this._httpClient.put(this.URL+"loadBasicInfo?id="+accommodationId,body)
  }


}
