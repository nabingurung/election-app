import { Routes } from '@angular/router';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { AddVoterComponent } from './components/add-voter/add-voter.component';

export const routes: Routes = [
    { path: 'voters', component: VoterListComponent },
  { path: 'add-voter', component: AddVoterComponent },
  { path: '', redirectTo: '/voters', pathMatch: 'full' }

];