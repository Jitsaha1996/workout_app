import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.frmBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  createRegister(): any {
    if (this.registerForm.invalid) {
      return;
    } else {
      console.log(this.registerForm.getRawValue());
    }
  }

  onNoClick(): any {
    this.router.navigateByUrl('/');
  }
}
