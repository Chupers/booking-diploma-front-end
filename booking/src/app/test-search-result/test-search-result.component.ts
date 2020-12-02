import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { parse } from 'path';
import { Accommodation } from '../entity/Accommodation';
import { SearchServiceService } from '../service/search-service.service';

@Component({
  selector: 'app-test-search-result',
  templateUrl: './test-search-result.component.html',
  styleUrls: ['./test-search-result.component.css']
})
export class TestSearchResultComponent implements OnInit {

  accommodation: Accommodation[];
  currentSearchValue: String;
  constructor(private _router: Router,
    private _route:ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _searchService: SearchServiceService) { 
      this.currentSearchValue = this._route.snapshot.paramMap.get('search')
      this._searchService.getAccommadationByBasicSearch(this.currentSearchValue).subscribe(
        data =>{
          this.accommodation = data
        }
      )
  }

  navigateToDetails(id:number){
    this._router.navigate(['/hotel',id])
  }

  ngOnInit(): void {
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    // mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1cGVycyIsImEiOiJjazNqcjJ4YnQwM3l5M2xwOXppNmtkMWF4In0.MqIEuzBBpryI6_dps113lw';
    // var map = new mapboxgl.Map({
    // container: 'mapContainer',
    // style: 'mapbox://styles/chupers/ck3pgqk6y0i1y1cmmi1iuylzi',
    // center: [27.5120221,53.8809624],
    // zoom:'14'
    // });


  }

  calculeteAverragePrice(acc:Accommodation) : number{
      var result :number = 0;
      acc.rooms.forEach(room =>{
        result += room.roomCost
      })
      return result/acc.rooms.length
  }

}
