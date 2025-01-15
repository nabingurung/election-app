// Purpose: Voter service to handle HTTP requests for Voter data.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter } from '../models/voter.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private apiUrl = `${environment.apiBaseUrl}/api/voter`; // Update with your API URL
   
  
  constructor(private http: HttpClient) { 
    
  }

  getVoters(): Observable<Voter[]> {
    
    return this.http.get<Voter[]>(this.apiUrl);
  }

  addVoter(voter: Voter): Observable<Voter> {
    return this.http.post<Voter>(this.apiUrl, voter);
  }

  getVotersByCity(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/by-city`);
  }

  getVoterCounts(): Observable<{ registered: number, nonRegistered: number, voted: number }> {
    return this.http.get<{ registered: number, nonRegistered: number, voted: number }>(`${this.apiUrl}/counts`);
  }

  updateVoter(voter: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${voter.id}`, voter);
  }
  getVoterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}