import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accommodation } from '../entity/Accommodation';
import { SearchServiceService } from '../service/search-service.service';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _searchService:SearchServiceService
  ) { 
    this.currentId = parseInt(this._route.snapshot.paramMap.get('id'))
    this._searchService.getAccommodationById(this.currentId).subscribe(response=>{
      this.accommodation = response
    })
  }
  accommodation:Accommodation
  currentId:number
  images=['https://jinqd1401.files.wordpress.com/2015/01/intercontinental-mar-menor-hotel-night-493.jpg','https://upload.wikimedia.org/wikipedia/commons/7/7e/Hotel_Imperial_Bulgaria_Sunny_Beach.jpg','https://www.litorehotel.com/web/ru/images/placeholders/1920x1200-2.jpg','https://q.bstatic.com/xdata/images/hotel/max1024x768/73346881.jpg?k=2cf24cea6159311c8d3295e52c6554b465701121ef4eb99b01a80930df5744f3&o=']
  pathForBigImage: string;
  ngOnInit(): void {
    this.pathForBigImage = this.images[0];
    
  }
  changeImagePath(path: string): void{
    this.pathForBigImage = path;
  }
}
