import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { GameSummaryComponent } from './game-summary/game-summary.component';
import { GameWindowComponent } from './game-window/game-window.component';
import { PlayerSetupComponent } from './player-setup/player-setup.component';

const routes: Routes = [
  { path: 'game-settings', component: GameSettingsComponent},
  { path: 'game-window', component: GameWindowComponent},
  { path: 'player-setup', component: PlayerSetupComponent},
  { path: 'game-summary', component: GameSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
