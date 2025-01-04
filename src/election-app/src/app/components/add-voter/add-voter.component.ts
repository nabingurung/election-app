// filepath: /Users/nabingurung/dev/ng-github/election-app/src/election-app/src/app/components/add-voter/add-voter.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoterService } from '../../services/voter.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class AddVoterComponent {
  voterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private voterService: VoterService,
    private router: Router
  ) {
    alert('AddVoterComponent');
    this.voterForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      isRegistered: [false],
      hasVoted: [false],
      dateOfBirth: ['', Validators.required],
      referredBy: ['']
    });
  }

  onSubmit() {
    if (this.voterForm.valid) {
      this.voterService.addVoter(this.voterForm.value).subscribe(() => {
        this.router.navigate(['/voters']);
      });
    }
  }
}