import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Accommodation, AccommodationInfo } from '../entity/Accommodation';
import { AccommodationService } from '../services/accommodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit {

  constructor(private _accommodationService: AccommodationService,private _router: Router) { }

  accommodations : Accommodation[]
  ngOnInit(): void {
    this._accommodationService.getAccommodation().subscribe(response=>{
      this.accommodations = response
    })
  }

  goToDetails(accommodationId : number){
    this._router.navigate(['/accommodationDetails',accommodationId])
  }
  createNew(){
    this._accommodationService.createNew().subscribe(
      data =>{
        let newId = data;
        this._router.navigate(['/newaccommodation',newId])
      }
    )
  }

}
