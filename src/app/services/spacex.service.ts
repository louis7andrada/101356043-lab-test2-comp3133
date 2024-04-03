import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.baseUrl}/launches`);
  }

  getLaunchDetails(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.baseUrl}/launches/${flightNumber}`);
  }
}
