import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService ,private router : Router) {}
    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (route.routeConfig?.path === 'login') {
            if (this.authService.getAuth()) {
                return false;
            } else {
                return true;
            }
        } else if (route.routeConfig?.path === 'home') {
            if (this.authService.getAuth()) 
              {
                return true;
            } else {
              this.router.navigate(['/login']);
                return false;
            }
        } else if (route.routeConfig?.path === 'register') {
            if (this.authService.getAuth()) {
                return false;
            } else {
                return true;
            }
        } else return false;
    }
}
