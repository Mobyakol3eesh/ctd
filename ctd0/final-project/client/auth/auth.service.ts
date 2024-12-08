import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    httpClient = inject(HttpClient);
    constructor() {}
    private isAuthenticated: boolean = false;

    checkAuth(): Observable<boolean> {
      return this.httpClient
          .get('http://localhost:3000/api/check-token', { withCredentials: true })
          .pipe(
              tap((res: any) => {
                  this.isAuthenticated = res.message === 'Authorized'
                  console.log('Is Authenticated:', this.isAuthenticated);
                  return this.isAuthenticated;
              }),
              catchError((err) => {
                  console.error(err);
                  this.isAuthenticated = false; 
                  return of(false);
              })
          );
  }

    getAuth() {
        return this.isAuthenticated;
    }
}
