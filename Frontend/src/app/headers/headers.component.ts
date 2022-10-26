import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    console.log("userInfo", this.userInfo);
  }

  tohome() {
    if (this.userInfo) {
      this.router.navigateByUrl('/catalouge');
    } else {
      this.router.navigateByUrl('/');
    }

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
    this.toastr.success('Log Out Successfully!', undefined);
  }

}
