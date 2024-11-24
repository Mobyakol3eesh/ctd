import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  user : {
    name: string,
    email: string,
    password: string
  } = {name: '',email: '', password: ''}; 
  constructor(private router : Router) {}

  httpClient = inject(HttpClient); 

  register(form : NgForm) {
    if(!form.valid)
    {
      console.log( "Form Not Valid");
    }
    else {
    this.httpClient.post('http://localhost:3000/api/register',this.user).subscribe((res : any) => {
      if(res.msg === "User created successfully") {
        this.router.navigate(['/login']);
      }
      else {
        alert(res.msg);
      }
    });

    }
  }
}
