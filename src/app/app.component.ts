import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Add the standalone: true flag
  imports: [RouterModule]
})
export class AppComponent {
  title = 'SpaceX Mission Tracker';
}
