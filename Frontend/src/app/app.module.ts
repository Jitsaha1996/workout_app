import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule,MatError, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersComponent } from './headers/headers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { FooterComponent } from './footer/footer.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HeadersComponent,
    LoginComponent,
    RegisterComponent,
    CatalougeComponent,
    FooterComponent,
    WorkoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule 
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
