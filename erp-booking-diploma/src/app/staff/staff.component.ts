import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Employer } from '../entity/Employer';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StaffComponent implements OnInit {

   employers:Employer[]


  constructor(private _employerService:EmployerService) {
   
  }

  ngOnInit(): void {
    this._employerService.getAllEmployer().subscribe(response=>{
      this.employers = response
    })
  }
  
}

  
  