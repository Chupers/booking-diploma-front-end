import { Room } from './Room'



export class Accommodation{
    accommodationId : number
    accommodationInfo: AccommodationInfo
    accommodationType:String
    imageId:String
    characteristicList:TreeDataItem[]
    rooms:Room[]
}

export class AccommodationInfo{
    accommodationName:String
    accommodationCountry:String
    accommodationStreet:String
    accommodationDesc:String
    accommodationCity:String
    countStar:number
}
export class TreeDataItem{
    name: String;
    characteristicChildren?: TreeChildItem[] = [];
  
    constructor(){
      this.name = "";
    }
  }
  export class TreeChildItem{
    childName: String
    iconName:String
    constructor(){
      this.childName = "";
    }
  }