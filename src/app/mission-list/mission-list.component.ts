import { Component ,OnInit} from '@angular/core';
import { SpacexApiService } from '../API/spacex-api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LaunchData } from '../interfaces/launch';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'mission-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './mission-list.component.html'
})
export class MissionListComponent implements OnInit{

  missions: LaunchData[]  = [];
  // filteredMissions: LaunchData[] = [];

  launchYears: string[] = [
    '2006', '2007', '2008', '2009',
    '2010', '2011', '2012', '2013',
    '2014', '2015', '2016', '2017',
    '2018', '2019', '2020'
  ];

  filterYear: string = '';

  constructor(private api: SpacexApiService) { }

  async ngOnInit() {
    this.filterMissionByYear();
  }


  async filterMissionByYear() {
    if(this.filterYear){
      const missionList = await this.api.getMissionByYear(this.filterYear);
      missionList.subscribe( data => {
        this.missions = data;
      });
    }else{
      const missionList = await this.api.getMissions();
      missionList.subscribe( data => {
        this.missions = data;
      });
    }
  }
}
