import { Component } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  imports: [BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  registeredVoters: number = 0;
  nonregisteredVoters: number = 0;
  totalVoters: number = 0;
  notVotedVoters: number = 0;
  votedVoters: number = 0;

// Chart data
public barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
};
public barChartLabels: string[] = [];
public barChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [],
      label: 'Voters by City'
    }
  ],
  labels: []
};
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];

  constructor(private voterService: VoterService) { }

  ngOnInit() {
    this.voterService.getVoters().subscribe(voters => {
      this.registeredVoters = voters.filter(voter => voter.isRegistered).length;
      this.nonregisteredVoters = voters.filter(voter => !voter.isRegistered).length;
      this.votedVoters = voters.filter(voter => voter.hasVoted).length;
      this.notVotedVoters = voters.filter(voter => !voter.hasVoted).length;
      this.totalVoters = voters.length;
    });

    this.voterService.getVotersByCity().subscribe(data => {
      this.barChartLabels = data.map((voter: { city: string }) => voter.city);
      this.barChartData = {
        datasets: [
          {
            data: data.map((voter: { count: number }) => voter.count),
            label: 'Voters by City'
          }
        ],
        labels: this.barChartLabels,
      };
    });
  }
}

