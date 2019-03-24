import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private auth:AuthService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    let resultado = false;

    if ( this.auth.isAuthenticated() ) {
      resultado = true;
    } else {
      console.error("User no authenticated")
    }

    return resultado;
  }
}