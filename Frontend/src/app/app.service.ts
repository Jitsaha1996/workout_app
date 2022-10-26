import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  rootURL = 'http://localhost:5000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
    })
  };

  httpOptionsForWorkouts = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Authorization': `Bearer ${localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).token : null}`
    })
  };

  constructor(private http: HttpClient) { }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/users', user, this.httpOptions);
  }
  userLogin(user: any) {
    return this.http.post(this.rootURL + '/users/login', user, this.httpOptions);
  }
  fetchWorkouts() {
    return this.http.get(this.rootURL + '/workouts', this.httpOptionsForWorkouts);
  }
  fetchSingleWorkouts(id: any) {
    return this.http.get(this.rootURL + `/workouts/${id}`, this.httpOptionsForWorkouts);
  }
}
