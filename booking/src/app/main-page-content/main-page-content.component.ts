import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.css']
})
export class MainPageContentComponent implements OnInit {

  constructor() { 
  }

  
  ngOnInit(): void {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');
    
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1cGVycyIsImEiOiJjazNqcjJ4YnQwM3l5M2xwOXppNmtkMWF4In0.MqIEuzBBpryI6_dps113lw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/chupers/ck3n2w1mv1sbc1cpaqf1vbkof',
    });
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      });
  }

}
