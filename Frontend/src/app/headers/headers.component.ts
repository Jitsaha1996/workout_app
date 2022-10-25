import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Input() title: string;
  userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : "";

  constructor() { }

  ngOnInit() {
    console.log("userInfo", this.userInfo);
  }

}
