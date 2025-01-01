// filepath: /Users/nabingurung/dev/ng-github/election-app/src/voter-app/src/app/voter.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Voter {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  referredBy: string;
}

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private apiUrl = 'http://localhost:5127/api/voter';

  constructor(private http: HttpClient) { }

  getVoters(): Observable<Voter[]> {
    return this.http.get<Voter[]>(this.apiUrl);
  }

  getVoterById(id: number): Observable<Voter> {
    return this.http.get<Voter>(`${this.apiUrl}/${id}`);
  }

  registerVoter(voter: Voter): Observable<Voter> {
    return this.http.post<Voter>(this.apiUrl, voter);
  }
}