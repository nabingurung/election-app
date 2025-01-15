import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
import { Hub } from 'aws-amplify/utils';
import { getCurrentUser, signIn,SignInOutput } from '@aws-amplify/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule,AmplifyAuthenticatorModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 username: string ='';
  password: string ='';

  constructor(private authService: AuthService, private router: Router) { 
    Amplify.configure(awsconfig);

  }
   ngOnInit() {
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser==null) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
    // Listen for authentication events
    Hub.listen('auth', async (data) => {
      const { payload } = data;
      if (payload.event === 'signedIn') {
        this.authService.login(payload.data.userId);
        const loggedInUser = this.authService.getLoggedInUser();
        console.log('Logged in user:', loggedInUser);

        this.router.navigate(['/dashboard']);
      }
    });
  }

  async logout() {
    await this.authService.signOut().then(() => {
      this.router.navigate(['/homepage']);
    });
    
  }
}
