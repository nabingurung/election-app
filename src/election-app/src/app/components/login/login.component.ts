import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 username: string ='';
  password: string ='';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
   if(this.authService.login(this.username, this.password)){
     this.router.navigate(['/dashboard']);
   } else {
     alert('Invalid credentials');
   }
  }
}
