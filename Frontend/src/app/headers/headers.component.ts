import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Input() title: string;
  userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("userInfo", this.userInfo);
  }

  tohome() {
    this.router.navigateByUrl('/');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
