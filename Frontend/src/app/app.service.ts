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
    },

    )
  };
  constructor(private http: HttpClient) { }
  // getUsers() {
  //   return this.http.get(this.rootURL + '/users',this.httpOptions);
  // }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/users', user, this.httpOptions);
  }
  userLogin(user: any) {
    return this.http.post(this.rootURL + '/users/login', user, this.httpOptions);
  }
}
