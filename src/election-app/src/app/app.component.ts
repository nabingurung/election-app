import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoterListComponent } from "./components/voter-list/voter-list.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VoterListComponent, CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'election-app';
}
