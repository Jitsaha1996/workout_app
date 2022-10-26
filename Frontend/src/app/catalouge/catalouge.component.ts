import { Component, OnInit } from '@angular/core';
import { catalouges } from "../../Constant/workoutsCatalouges";
import { AppService } from '../app.service';

@Component({
  selector: 'app-catalouge',
  templateUrl: './catalouge.component.html',
  styleUrls: ['./catalouge.component.css']
})
export class CatalougeComponent implements OnInit {
  title = "Workouts Catalouge";
  searchValue: string;
  catalougeItems: any;
  allCatalouges: any;

  constructor(private appservice: AppService,) { }

  ngOnInit() {
    this.fetchCatalouges();
  }

  fetchCatalouges() {
    this.appservice.fetchWorkouts().subscribe(response => {
      this.catalougeItems = response;
      this.allCatalouges = response;
    })
  }

  searchHandler(value: string): any {
    let serachResult = [];
    this.catalougeItems = this.allCatalouges;

    if (value.length) {
      serachResult = this.catalougeItems.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    } else {
      serachResult = this.allCatalouges;
    }

    this.catalougeItems = serachResult;
  }
}
