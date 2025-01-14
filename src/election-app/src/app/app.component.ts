import { Component } from '@angular/core';
import {
  Router,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { signOut,signIn } from '@aws-amplify/auth';

Amplify.configure(awsconfig);

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLinkActive,
    AmplifyAuthenticatorModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'election-app';

  constructor(public authService: AuthService, private router: Router) {
    Amplify.configure(awsconfig);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/homepage']);
  }
  
  async signOut() {
    alert('signing out');
    try {
      console.log('signing out');
      await signOut();
      console.log('sign out success');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
