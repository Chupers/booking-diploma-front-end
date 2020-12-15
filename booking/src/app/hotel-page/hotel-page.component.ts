import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReservationComponent } from '../dialog/reservation/reservation.component';
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
    private _searchService:SearchServiceService,
    public dialog: MatDialog
  ) { 
    this.currentId = parseInt(this._route.snapshot.paramMap.get('id'))
    this._searchService.getAccommodationById(this.currentId).subscribe(response=>{
      this.accommodation = response
    })
  }
  accommodation:Accommodation
  currentId:number
  ngOnInit(): void {

    
  }

  reservRoom(roomId:number){
    this.dialog.open(ReservationComponent,{data:{roomId:roomId}})
  }
}
