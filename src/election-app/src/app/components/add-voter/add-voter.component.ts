import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoterService } from '../../services/voter.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AuthService } from '../../services/auth.service';
import { signIn } from '@aws-amplify/auth';


@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,NgxMaskDirective],
  providers:[provideNgxMask()]
})
export class AddVoterComponent implements OnInit {
  voterForm: FormGroup;
  transactionUserId: string = '';

  constructor(
    private fb: FormBuilder,
    private voterService: VoterService,
    private router: Router,
    private authService: AuthService
  ) {
    
    this.voterForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['Maryland',Validators.required],
     // zipCode: ['', Validators.pattern(/^\d{5}$/)],
     // phoneNumber: ['', [Validators.required, Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]], // Phone number pattern
      zipCode: [''],
      phoneNumber: ['', [Validators.required]], // Phone number pattern
      isRegistered: [false],
      hasVoted: [false],
      referredBy: [''],
      hasSpouse:[false],
      spouseName:[''],
      transactionUserId:['']
    });
  }

  ngOnInit(): void {
    // get the logged in user email
    this.authService.getLoggedInUserEmail().then(email => {
      this.transactionUserId = email;
      this.voterForm.patchValue({ transactionUserId: this.transactionUserId });
    });
    
  }

  onSubmit() {
    if (this.voterForm.valid) {
      // check if the hasSpouse is checked
      // if it is unchecked, the spouseName field should be empty
      if(!this.voterForm.value.hasSpouse){
        this.voterForm.value.spouseName = '';
      }
      this.voterService.addVoter(this.voterForm.value).subscribe(() => {
        this.router.navigate(['/voters']);
      });
    }
  }
}