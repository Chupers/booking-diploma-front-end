import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  ngOnInit(): void {
    this.createDisplayedColumns()
  }
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  createDisplayedColumns(){
    let startDate = -20
    while(startDate != 20){
      let date = new Date().setDate(new Date().getDay()+startDate)
      console.log(date)
      this.displayedColumns.push(date.toString())
      startDate += 1
    }
  }
}

export interface PeriodicElement {
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1},
  {position: 2},
  {position: 3},
];