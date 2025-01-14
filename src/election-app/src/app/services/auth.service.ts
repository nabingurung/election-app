import { Injectable } from '@angular/core';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { signOut, fetchAuthSession } from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private isAuthenticated: boolean = false;
 private loggedInUser: any = null;
  constructor() { 
    //Amplify.configure(awsconfig);
    this.loadAuthState();
  }

  // load the authentication state 
  // from the local storage
  private loadAuthState() : void {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const loggedInUser = localStorage.getItem('loggedInUser');
    this.isAuthenticated = isAuthenticated ? JSON.parse(isAuthenticated) : false;
    this.loggedInUser = loggedInUser ? JSON.parse(loggedInUser) : null; 
  
  }

  // save the authentication state
  // to the local storage
  private saveAuthState() : void {
    localStorage.setItem('isAuthenticated', JSON.stringify(this.isAuthenticated));
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
  }

  // clear the authentication state
  // from the local storage
  private clearAuthState() : void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('loggedInUser');
  }
   login(username: string): boolean {
    if (username) {
      this.isAuthenticated = true;
      console.log('Logged in user: here');
      this.loggedInUser =  fetchAuthSession();
      console.log('Logged in user: there');
      return true;
    }
    return false;
  }

  async logout() {
    this.isAuthenticated = false;
    await signOut();
  }

  getAuthStaus(): boolean {
    return this.isAuthenticated;
  }


  // Sign-out logic
  async signOut(): Promise<void> {
    try {
      await signOut();
      this.isAuthenticated=false;
      this.loggedInUser = null;
      this.clearAuthState();
      console.log('Sign-out successful');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

  // Fetch the current authenticated user
  async getCurrentUser(): Promise<any> {
    try {
      const user = await fetchAuthSession();
      this.loggedInUser = user;
      this.saveAuthState();
      console.log('Current user:', user);
      return user;
    } catch (error) {
      console.error('Error fetching current user:', error);
      return null; // Return null if no user is logged in
    }
  }

  // get logged in user
  getLoggedInUser(): any {
    return this.loggedInUser;
  }

}

