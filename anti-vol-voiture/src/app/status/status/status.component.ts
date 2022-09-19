import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

  map: any;

  constructor() { }

  ngOnInit(): void {
    this.setMap();
  }

  setMap(): void {
    this.map = L.map('map').setView([45.82354344398188, 4.8994410037994385], 15);

    const tileUrl = '//{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';

    var osmLayer = L.tileLayer(tileUrl, {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 28
    });

    this.map.addLayer(osmLayer);

  }

}
