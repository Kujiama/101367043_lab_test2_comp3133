import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) { }

  getMissions(){
    return this.http.get(`${this.baseUrl}/launches`);
  }

  // getMissionDetails(flightNumber: number) {
  //   return this.http.get(`${this.baseUrl}/launches/${flightNumber}`);
  // }

  // getLaunches() {
  //   return this.http.get('https://api.spacexdata.com/v3/launches');
  // }
}
