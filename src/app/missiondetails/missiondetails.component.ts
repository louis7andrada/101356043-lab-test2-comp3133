import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../models/launch.model';

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
    launch_site: { site_name_long: '' },
    rocket: { rocket_name: '' },
    links: { mission_patch_small: '' },
    details: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
