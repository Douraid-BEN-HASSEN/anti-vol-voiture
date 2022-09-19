import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit {

  enabled: boolean;
  range: number;
  latLng: { lat: string; lng: string; };

  constructor() {
    this.enabled = false;
    this.range = 5;
    this.latLng = {
      lat: '45.82354344398188',
      lng: '4.8994410037994385'
    }
  }

  ngOnInit(): void {
  }

  enabledTrigger(): void {
    this.enabled = !this.enabled;
  }

  onRangeChange(event): void {
    this.range = event.target.value;
  }
}
