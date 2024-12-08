import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private router: Router, private authService: AuthService) {}

    httpClient = inject(HttpClient);

    login(user: any) {
        this.httpClient
            .post('http://localhost:3000/api/login', user, {
                withCredentials: true,
            })
            .subscribe((res: any) => {
                if (res.msg === 'Login successful') {
                     this.authService.checkAuth().subscribe(() => {
                        this.router.navigate(['/home']);
                     });
                } else {
                    alert(res.msg);
                }
            });
    }
}
