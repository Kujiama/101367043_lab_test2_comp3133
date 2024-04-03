import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaunchData } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }


  // with observables we unsure that we get the data from the API
  // and that the data is returned in the form of our interface LaunchData
  getMissions(): Observable<LaunchData[]>{
    return this.http.get<LaunchData[]>(`${this.baseUrl}/launches`);
  }

  getMissionDetails(flightNumber: number): Observable<LaunchData> {
    return this.http.get<LaunchData>(`${this.baseUrl}/launches/${flightNumber}`);
  }

  getMissionByYear(year: string): Observable<LaunchData[]> {
    return this.http.get<LaunchData[]>(`${this.baseUrl}/launches?launch_year=${year}`);
  }
}
