// filepath: /Users/nabingurung/dev/ng-github/election-app/src/voter-app/src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VoterListComponent } from './voter-list/voter-list.component';
import { VoterRegisterComponent } from './voter-register/voter-register.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterListComponent,
    VoterRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }