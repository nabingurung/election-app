// filepath: /Users/nabingurung/dev/ng-github/election-app/src/voter-app/src/app/voter-register/voter-register.component.ts
import { Component } from '@angular/core';
import { VoterService, Voter } from '../voter.service';

@Component({
  selector: 'app-voter-register',
  templateUrl: './voter-register.component.html',
  styleUrls: ['./voter-register.component.css']
})
export class VoterRegisterComponent {
  voter: Voter = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    referredBy: ''
  };

  constructor(private voterService: VoterService) { }

  registerVoter(): void {
    this.voterService.registerVoter(this.voter).subscribe(data => {
      console.log('Voter registered:', data);
    });
  }
}