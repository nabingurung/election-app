import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private isAuthenticated: boolean = false;
  constructor() { }

  login(username: string, password: string) {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
  }

  getAuthStaus(): boolean {
    return this.isAuthenticated;
  }
}
