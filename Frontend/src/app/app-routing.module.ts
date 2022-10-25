import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WorkoutComponent } from './workout/workout.component';


const routes: Routes = [
  { path: "", component: LandingpageComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "catalouge", component: CatalougeComponent, pathMatch: "full" },
  { path: "catalouge/:workoutTitle/:workoutId", component: WorkoutComponent, pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
