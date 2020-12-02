import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Accommodation } from '../entity/Accommodation';
import { Room } from '../entity/Room';
import { AccommodationService } from '../services/accommodation.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-accommodation-details',
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.css']
})
export class AccommodationDetailsComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _accService : AccommodationService,
    private _route:ActivatedRoute,
    private _roomService: RoomService,
    private _router: Router) {

      this.currentId = parseInt(this._route.snapshot.paramMap.get('id'))  
      this._accService.getById(this.currentId).subscribe(response=>{
        this.accommodation = response
        this.rooms = this.accommodation.rooms
        this.dataSource = new MatTableDataSource(this.rooms)
      })

     }

  currentId:number
  accommodation : Accommodation
  rooms:Room[]
  displayedColumns: string[] = ['No','type','price']
  roomGroupControl: FormGroup;
  dataSource 
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createRoom(){
    this._roomService.save(this.roomGroupControl.controls["number"].value,
    this.roomGroupControl.controls["deck"].value,
    this.roomGroupControl.controls["price"].value,
    this.currentId).subscribe(data=>{
      this.accommodation = data
      this.rooms = this.accommodation.rooms
      this.dataSource = new MatTableDataSource(this.rooms)
    })
  }

  editAccommodation(){
    this._router.navigate(['/newaccommodation',this.currentId])
  }

  ngOnInit(): void {
    this.roomGroupControl  =  this._formBuilder.group({
      number: ['', Validators.required],
      deck:['',Validators.required],
      price:['',Validators.required],
  }); 
  }

}
