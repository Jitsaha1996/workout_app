import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  title = "Welcome Guest"
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(): any {
    this.router.navigateByUrl('/login');
  }

  onSignup(): any {
    this.router.navigateByUrl('/register');
  }
}
