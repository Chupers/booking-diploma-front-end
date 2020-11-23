import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccommodationService } from '../services/accommodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit {

  constructor(private _accommodationService: AccommodationService,private _router: Router) { }

  ngOnInit(): void {
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
