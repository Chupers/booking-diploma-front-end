import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor() { }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  ngOnInit(): void {
  }
  findHotel(){

  }
}
