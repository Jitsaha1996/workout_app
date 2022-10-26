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

  constructor(
    private http: HttpClient
  ) { }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/users', user, this.httpOptions);
  }

  userLogin(user: any) {
    return this.http.post(this.rootURL + '/users/login', user, this.httpOptions);
  }

  fetchWorkouts() {
    return this.http.get(this.rootURL + '/workouts', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Authorization': `Bearer ${localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).token : null}`
      })
    });
  }

  fetchSingleWorkouts(id: any) {
    return this.http.get(this.rootURL + `/workouts/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Authorization': `Bearer ${localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).token : null}`
      })
    });
  }
}
