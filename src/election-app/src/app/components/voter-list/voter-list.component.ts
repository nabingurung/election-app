// filepath: /election-app/src/app/components/voter-list/voter-list.component.ts
import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../services/voter.service';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {
  voters: any[] = [];

  constructor(private voterService: VoterService) { }

  ngOnInit(): void {
    alert('VoterListComponent.ngOnInit()');
    this.voterService.getVoters().subscribe(data => {
      this.voters = data;
    });
  }
}