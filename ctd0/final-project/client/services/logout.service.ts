import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class LogoutService {
    constructor(private router: Router, private authService: AuthService) {}
    httpClient = inject(HttpClient);
    logout() {
        this.httpClient
            .get('http://localhost:3000/api/logout', { withCredentials: true })
            .subscribe((res: any) => {
                if (res.msg === 'Logged out successfully.') {
                    this.authService
                        .checkAuth()
                        .subscribe(() => {
                            this.router.navigate(['/login']);
                        });
                } else {
                    console.log('Error');
                }
            });
    }
}
