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
import { VoterService } from './services/voter.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/authInterceptor';

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

  async logout() {
   await this.authService.signOut();
    this.router.navigate(['/homepage']);
  }
}
