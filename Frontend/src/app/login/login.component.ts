import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login"
  registerForm: FormGroup;

  constructor(
    private frmBuilder: FormBuilder,
    private router: Router,
    private appservice: AppService) { }

  ngOnInit() {
    this.registerForm = this.frmBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
    this.checkUserCredentials();
  }
  checkUserCredentials(): any {
    if (localStorage.getItem("userInfo"))
      this.router.navigateByUrl('/catalouge');
  }

  createRegister(): any {
    if (this.registerForm.invalid) {
      return;
    } else {
      console.log(this.registerForm.getRawValue());
      this.appservice.userLogin(this.registerForm.getRawValue()).subscribe(response => {
        if (response) {
          localStorage.setItem("userInfo", JSON.stringify(response));
          if (response) {
            this.router.navigateByUrl('/catalouge');
          }
        }
      })
    }
  }

  onNoClick(): any {
    this.router.navigateByUrl('/');
  }
}
