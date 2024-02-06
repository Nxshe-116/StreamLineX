import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['login']);
    }
    return true;
  }
}
