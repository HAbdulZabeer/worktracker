import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {

  }
  getToken():boolean {
    let userDetails: any = localStorage.getItem('userDetails') == null ? '' : localStorage.getItem('userDetails');
    return userDetails!="";
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.getToken()){
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }

}
