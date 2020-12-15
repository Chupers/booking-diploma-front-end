import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationControlGroup: FormGroup;

  constructor(private _fromBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _reservService: ReservationService) { }

  ngOnInit(): void {
    this.reservationControlGroup = this._fromBuilder.group({
      passportNumber:['',Validators.required],
      checkIn:['',Validators.required],
      checkOut:['',Validators.required]
    })
    console.log(this.data.roomId)
  }

  reserv(){
    if(this.reservationControlGroup.valid){
        this._reservService.reserv(
          this.transform(this.reservationControlGroup.controls["checkIn"].value),
          this.transform(this.reservationControlGroup.controls["checkOut"].value),
          this.data.roomId,
          this.reservationControlGroup.controls["checkIn"].value
        ).subscribe(response =>{
          console.log("reserv");
        })
    }
  }

  transform(value:string):string{
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, 'dd/MM/yyyy');
    return value;
  }

}
