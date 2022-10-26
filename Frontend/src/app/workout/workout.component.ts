import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catalouges } from "../../Constant/workoutsCatalouges";
import * as moment from 'moment';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
  title = "Workout";
  catalougeItems = {};
  time = 0;
  interval = null;
  showtime = moment.utc(0).format('HH:mm:ss');
  isstart = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('workoutId');
    this.catalougeItems = catalouges.filter(item => item._id === id);
    this.title = this.title + ` - ${this.catalougeItems[0].title}`;
  }

  start() {
    this.isstart = true;
    this.interval = setInterval(() => {
      this.time += 1;
      this.showtime = moment.utc(this.time * 1000).format('HH:mm:ss');
    }, 1000);
  }

  end() {
    this.isstart = false;
    clearInterval(this.interval);
  }

  reset() {
    this.isstart = false;
    this.time = 0;
    this.showtime = moment.utc(0).format('HH:mm:ss');
  }

}
