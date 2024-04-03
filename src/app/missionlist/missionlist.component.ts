import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Launch } from '../models/launch.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  filterYear: string = '';

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches(): void {
    this.spacexService.getLaunches().subscribe(
      (data: Launch[]) => {
        this.launches = data;
        this.filteredLaunches = data;
      },
      error => {
        // Handle the error here
        console.error('There was an error retrieving launches', error);
      }
    );
  }

  applyFilter(): void {
    this.filteredLaunches = this.launches.filter(
      launch => launch.launch_year === this.filterYear
    );
  }
}
