import { Component, OnInit } from '@angular/core';
import { catalouges } from "../../Constant/workoutsCatalouges";

@Component({
  selector: 'app-catalouge',
  templateUrl: './catalouge.component.html',
  styleUrls: ['./catalouge.component.css']
})
export class CatalougeComponent implements OnInit {
  title = "Workouts Catalouge";
  searchValue: string;
  catalougeItems = catalouges;

  constructor() { }

  ngOnInit() { }

  searchHandler(value: string): any {
    let serachResult = [];
    this.catalougeItems = catalouges;

    if (value.length) {
      serachResult = this.catalougeItems.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    } else {
      serachResult = catalouges;
    }

    this.catalougeItems = serachResult;
  }
}
