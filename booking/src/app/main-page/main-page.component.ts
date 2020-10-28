import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  constructor() {
  
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  searchAnimationCheck: boolean
  ngOnInit(): void {
    this.searchAnimationCheck = false;
  }
  SearchAnim(){
    this.searchAnimationCheck = !this.searchAnimationCheck
  }

}
