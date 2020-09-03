import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }
  searchAnimationCheck: boolean
  ngOnInit(): void {
    this.searchAnimationCheck = false;
  }
  SearchAnim(){
    this.searchAnimationCheck = !this.searchAnimationCheck
  }

}
