import { TreeDataItem } from '../hotel-manage-base/hotel-manage-base.component'
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
    countStart:number
}