import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.auth.isAuthenticated()) {
        console.log('AUTHGUARD: O usuário não está autenticado: ', this.auth.isAuthenticated());
        this.router.navigate(['sign-in']);
        return false;
      }
      console.log('AUTHGUARD: O usuário está autenticado: ', this.auth.isAuthenticated());
      return true;
  }

}
