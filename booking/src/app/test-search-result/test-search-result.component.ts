import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-search-result',
  templateUrl: './test-search-result.component.html',
  styleUrls: ['./test-search-result.component.css']
})
export class TestSearchResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1cGVycyIsImEiOiJjazNqcjJ4YnQwM3l5M2xwOXppNmtkMWF4In0.MqIEuzBBpryI6_dps113lw';
    var map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/chupers/ck3pgqk6y0i1y1cmmi1iuylzi',
    center: [27.5120221,53.8809624],
    zoom:'14'
    });
  }

}
