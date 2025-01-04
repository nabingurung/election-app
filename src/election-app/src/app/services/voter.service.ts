// Purpose: Voter service to handle HTTP requests for Voter data.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter } from '../models/voter.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private apiUrl = 'http://localhost:5127/api/voter'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getVoters(): Observable<Voter[]> {
    return this.http.get<Voter[]>(this.apiUrl);
  }

  addVoter(voter: Voter): Observable<Voter> {
    return this.http.post<Voter>(this.apiUrl, voter);
  }
}