import { Component, OnInit,OnDestroy } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { Voter } from '../../models/voter.model';
import {DataTablesModule} from 'angular-datatables';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css'],
  imports: [ DataTablesModule, FormsModule]
})
export class VoterListComponent implements OnInit {

  dtOptions: Config = {};
  dtTrigger: Subject<any> = new Subject();
  registeredCount: number = 0;
  notVotedCount: number = 0;
  voters: any[] = [];
 
  constructor(private voterService: VoterService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [10, 25, 50,100],
      pageLength: 10,
      processing: true,
      order: [[0, 'asc']]
    };
    this.voterService.getVoters().subscribe(data => {
      this.voters = data;
      this.dtTrigger.next(null);
      this.registeredCount= this.voters.filter(voter => voter.isRegistered).length;
      this.notVotedCount= this.voters.filter(voter => !voter.hasVoted).length;
     
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  trackByVoter(index: number, voter: any): number {
    return voter.id;
  }

  editVoter(voter: any): void {
    voter.editing = true;
  }

  saveVoter(voter: any): void {
    voter.editing = false;
    this.voterService.updateVoter(voter).subscribe();
  }

  cancelEdit(voter: any): void {
    voter.editing = false;
    this.voterService.getVoterById(voter.id).subscribe(data => {
      Object.assign(voter, data, { editing: false });
    });
  }
}