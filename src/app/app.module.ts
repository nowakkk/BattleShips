import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { GameWindowComponent } from './game-window/game-window.component';
import { GameTableComponent } from './game-table/game-table.component';
import { PlayerSetupComponent } from './player-setup/player-setup.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameSummaryComponent } from './game-summary/game-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    GameSettingsComponent,
    GameWindowComponent,
    GameTableComponent,
    PlayerSetupComponent,
    GameSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
