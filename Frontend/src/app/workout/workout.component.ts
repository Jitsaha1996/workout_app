import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catalouges } from "../../Constant/workoutsCatalouges";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
  title = "Workout";
  catalougeItems = {};

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('workoutId');
    this.catalougeItems = catalouges.filter(item => item._id === id);
    this.title = this.title + ` - ${this.catalougeItems[0].title}`;
  }

  start() {

  }

  end() {

  }

  total() {

  }

}
