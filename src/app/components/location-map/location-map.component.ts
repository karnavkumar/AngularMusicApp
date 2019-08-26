import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss']
})
export class LocationMap {

  // google maps zoom level
  zoom: number = 15;

  // initial center position for the map
  lat: number = 23.0257;
  lng: number = 72.5076;
  
  markers: marker[] = [
	  {
		  lat: 23.0257,
		  lng: 72.5076,
		  label: 'I',
		  draggable: false
	  }
  ]
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
