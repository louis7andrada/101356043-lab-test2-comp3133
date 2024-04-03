import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../models/launch.model'; // assuming you have defined a Launch interface

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() launchDetails: Launch = {
    flight_number: 0,
    mission_name: '',
    launch_year: '',
    launch_date_utc: '',
    launch_site: { site_name_long: '' }, // Corrected property name
    rocket: { rocket_name: '' },
    links: { mission_patch_small: '' },
    details: ''
  };

  constructor() { }

  ngOnInit(): void {
    // You might want to handle additional initialization here
  }

  // Add any additional methods or logic as needed for your component
}
