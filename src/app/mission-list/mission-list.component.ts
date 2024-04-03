import { Component ,OnInit} from '@angular/core';
import { SpacexApiService } from '../API/spacex-api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'mission-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent implements OnInit{

  missions: any = [];

  constructor(private api: SpacexApiService) { }

  ngOnInit() {
    // using .subscribe() to get the data from the API 
    // it will return an array of missions
    this.api.getMissions().subscribe((data) => {
      this.missions = data;
    });

  }



}
