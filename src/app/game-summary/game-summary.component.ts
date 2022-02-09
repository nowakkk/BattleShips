import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.sass']
})
export class GameSummaryComponent implements OnInit {

  gameWinner: string;

  firstPlayerName: string;
  secondPlayerName: string;

  firstPlayerShoots: number;
  secondPlayerShoots: number;

  firstPlayerAccuracyString!: string;
  secondPlayerAccuracyString!: string;

  firstPlayerLongestHitStrike: number;
  secondPlayerLongestHitStrike: number;

  firstPlayerLongestMissStrike: number;
  secondPlayerLongestMissStrike: number;

  constructor(private gameManager: GameManagerService, private router: Router) {
    this.gameWinner = gameManager.gameWinner;
    this.firstPlayerShoots = gameManager.firstPlayerShoots;
    this.secondPlayerShoots = gameManager.secondPlayerShoots;

    this.firstPlayerName = gameManager.firstPlayerName;
    this.firstPlayerLongestHitStrike = gameManager.firstPlayerLongestStrikePeak;
    this.firstPlayerLongestMissStrike = gameManager.firstPlayerLongestNoStrikePeak;

    this.secondPlayerName = gameManager.secondPlayerName;
    this.secondPlayerLongestHitStrike = gameManager.secondPlayerLongestStrikePeak;
    this.secondPlayerLongestMissStrike = gameManager.secondPlayerLongestNoStrikePeak;

    if (this.firstPlayerShoots === 0){
      this.firstPlayerAccuracyString = '0';
    }
    else {
      this.firstPlayerAccuracyString = ((this.gameManager.firstPlayerHits / this.gameManager.firstPlayerShoots) * 100).toFixed(2);
    }

    if (this.secondPlayerShoots === 0){
      this.secondPlayerAccuracyString = '0';
    }
    else {
      this.secondPlayerAccuracyString = ((this.gameManager.secondPlayerHits / this.gameManager.secondPlayerShoots)*100).toFixed(2);
    }
   }

  ngOnInit(): void {
  }

  public playAgain(){
    this.router.navigate(['/game-settings']);
  }

}
