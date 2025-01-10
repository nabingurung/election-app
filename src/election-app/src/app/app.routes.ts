import { Routes } from '@angular/router';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { AddVoterComponent } from './components/add-voter/add-voter.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'voters', component: VoterListComponent ,canActivate: [AuthGuard]},
  { path: 'add-voter', component: AddVoterComponent ,canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]}
];