import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  firstPlayerName!: string;
  firstPlayerShoots: number = 0;
  firstPlayerHits: number = 0;
  firstPlayerLongestStrikePeak: number = 0;
  firstPlayerLongestStrike: number = 0;
  firstPlayerAccuracy: number = 0;
  firstPlayerLongestNoStrike: number = 0;
  firstPlayerLongestNoStrikePeak: number = 0;

  secondPlayerName!: string;
  secondPlayerShoots: number = 0;
  secondPlayerHits: number = 0;
  secondPlayerLongestStrike: number = 0;
  secondPlayerLongestStrikePeak: number = 0;
  secondPlayerAccuracy: number = 0;
  secondPlayerLongestNoStrike: number = 0;
  secondPlayerLongestNoStrikePeak: number = 0;

  shipAmount = 8;
  gameWinner!: string;

  firstPlayerMap: any[] = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
  "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];

  secondPlayerMap: any[] = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
  "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];

  constructor(public snackBar: MatSnackBar) { }

  public sendInfo(message: string, snackDuration: number = 3000){
    this.snackBar.open(message, "OK", {
      duration: snackDuration,
    })
  }
}
