import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title="Register";
  registerForm: FormGroup;

  constructor( private frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.frmBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(100),
      Validators.minLength(3)]],
      email: ["", [Validators.email]],
      password: ["", [Validators.minLength(3)] ],
      confirmPassword: ["", [Validators.required, Validators.minLength(3)]],
    
    });
  }

  createRegister(): any {
    if (this.registerForm.invalid) {

      return;
    } else {
      
     console.log(this.registerForm.getRawValue()) ;
    }
  }

  

}
