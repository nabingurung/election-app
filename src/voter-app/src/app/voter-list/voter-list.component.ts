// filepath: /Users/nabingurung/dev/ng-github/election-app/src/voter-app/src/app/voter-list/voter-list.component.ts
import { Component, OnInit } from '@angular/core';
import { VoterService, Voter } from '../voter.service';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {
  voters: Voter[] = [];

  constructor(private voterService: VoterService) { }

  ngOnInit(): void {
    this.voterService.getVoters().subscribe(data => {
      this.voters = data;
    });
  }
}