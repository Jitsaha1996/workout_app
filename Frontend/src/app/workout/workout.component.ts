import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catalouges } from "../../Constant/workoutsCatalouges";
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
  title = "Workout";
  catalougeItems;
  time = 0;
  interval = null;
  showtime = moment.utc(0).format('HH:mm:ss');
  isstart = false;
  totalcalories = 0;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private appservice: AppService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('workoutId');
    this.getSingleWorkout(id);

    // this.catalougeItems = catalouges.filter(item => item._id === id);

  }

  getSingleWorkout(id) {
    this.appservice.fetchSingleWorkouts(id).subscribe(response => {
      this.catalougeItems = response;
      this.title = this.title + ` - ${this.catalougeItems.title}`;
    })

  }

  start() {
    this.isstart = true;
    this.toastr.info(`Timer has started`, undefined);
    this.interval = setInterval(() => {
      this.time += 1;
      this.showtime = moment.utc(this.time * 1000).format('HH:mm:ss');
      this.totalcalories = this.time * this.catalougeItems.calories;
    }, 1000);
  }

  end() {
    this.isstart = false;
    this.toastr.info(`Timer has paused`, undefined);
    clearInterval(this.interval);
  }

  reset() {
    this.isstart = false;
    this.toastr.info(`Timer reseted`, undefined);
    this.time = 0;
    this.showtime = moment.utc(0).format('HH:mm:ss');
    this.totalcalories = 0;
    clearInterval(this.interval);
  }

}
