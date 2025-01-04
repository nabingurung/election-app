import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoterListComponent } from "./components/voter-list/voter-list.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VoterListComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'election-app';
}
