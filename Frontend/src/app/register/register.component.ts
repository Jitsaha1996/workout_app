import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = "Register";
  registerForm: FormGroup;

  constructor(
    private frmBuilder: FormBuilder,
    private router: Router,
    private appservice: AppService
  ) { }

  ngOnInit() {
    this.registerForm = this.frmBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(3)]],
    });

    this.checkUserCredentials();

  }

  checkUserCredentials(): any {
    if (localStorage.getItem("userInfo")) {
      this.router.navigateByUrl('/catalouge');
    }
  }

  createRegister(): any {
    if (this.registerForm.invalid) {
      return;
    } else {
      console.log(this.registerForm.getRawValue());
      const payload = {
        name: this.registerForm.get("name").value,
        email: this.registerForm.get("email").value,
        password: this.registerForm.get("password").value
      }
      this.appservice.addUser(payload).subscribe(response => {
        console.log(response)
        localStorage.setItem("userInfo", JSON.stringify(response));
        if (response) {
          this.router.navigateByUrl('/catalouge');
        }
      }
      );

    }
  }

  onNoClick(): any {
    this.router.navigateByUrl('/');
  }
}
