import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserValidService implements CanActivate {

  constructor(private router: Router,) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!JSON.parse(localStorage.getItem("userInfo"))) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
