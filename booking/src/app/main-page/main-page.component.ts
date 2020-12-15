import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,private _router: Router) {
    this.searchForm  =  this._formBuilder.group({
      value: ['', Validators.required],
  });
  }
  search(){
    this._router.navigate(['/search',this.searchForm.controls["value"].value])
  }
  
  ngOnInit() {
   
  }
  ngOnDestroy(){

  }
  
}
