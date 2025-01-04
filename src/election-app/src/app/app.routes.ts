import { Routes } from '@angular/router';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { AddVoterComponent } from './components/add-voter/add-voter.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'voters', component: VoterListComponent },
  { path: 'add-voter', component: AddVoterComponent , 
    providers: [ReactiveFormsModule]},
  { path: '', redirectTo: '/voters', pathMatch: 'full' }

]
