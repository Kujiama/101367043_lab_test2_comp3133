import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../network/spacex-api.service';
import { CommonModule } from '@angular/common';
import { RouterLink , ActivatedRoute} from '@angular/router';
import { LaunchData } from '../models/launch';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mission-details.component.html'
})
export class MissionDetailsComponent implements OnInit{

  launchDetail: LaunchData = {} as LaunchData;

  constructor(private api: SpacexApiService, private route: ActivatedRoute) {}

  async ngOnInit() {
    const flightNumber:number = this.route.snapshot.params['flight_number']; // using ActivatedRoute to get the flightNumber from the URL
    this.getMissionDetails(flightNumber);
  }


  private async getMissionDetails(flightNumber: number) {
    const mission = await this.api.getMissionDetails(flightNumber)

    mission.subscribe((data: LaunchData) => {
      this.launchDetail = data; // Assign fetched data to launchDetail
      // console.log(this.launchDetail); // You can do something with the fetched mission details
    }, (error) => {
      console.error('Error fetching mission details:', error);
    });
  }

}
