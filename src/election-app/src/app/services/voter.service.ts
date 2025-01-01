// filepath: /election-app/src/app/services/voter.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private apiUrl = 'http://localhost:5127/api/voter'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getVoters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}