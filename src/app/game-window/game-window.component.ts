import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.sass']
})
export class GameWindowComponent implements OnInit {

  firstPlayer: string;
  secondPlayer: string;

  firstPlayerMap: any[];
  secondPlayerMap: any[];

  firstPlayerStrike: number = 0;
  firstPlayerStrikePeak: number = 0;
  secondPlayerStrike: number = 0;
  secondPlayerStrikePeak: number = 0;

  firstPlayerShoots: number = 0;
  secondPlayerShoots: number = 0;

  nextMoveFor: string;

  constructor(private gameManager: GameManagerService, private router: Router) {
    this.firstPlayer = gameManager.firstPlayerName;
    this.secondPlayer = gameManager.secondPlayerName;
    this.firstPlayerMap = gameManager.firstPlayerMap;
    this.secondPlayerMap = gameManager.secondPlayerMap;
    this.nextMoveFor = gameManager.firstPlayerName;
   }

  ngOnInit(): void {
  }

  public checkSquare(square: number, player: string){
    if ((player === "player1") && (this.nextMoveFor === this.gameManager.firstPlayerName)){
      if (this.secondPlayerMap[square] === "ship"){
        this.gameManager.firstPlayerShoots +=1;
        this.gameManager.firstPlayerHits += 1;
        this.gameManager.firstPlayerLongestNoStrike = 0;
        this.secondPlayerMap[square] = "shooted";
        this.gameManager.firstPlayerLongestStrike += 1;
        
        if (this.gameManager.firstPlayerLongestStrike > this.gameManager.firstPlayerLongestStrikePeak){
          this.gameManager.firstPlayerLongestStrikePeak = this.gameManager.firstPlayerLongestStrike;
        }
      }
      else if ((this.secondPlayerMap[square] !== "shooted") && (this.secondPlayerMap[square] !== "missed")) {
        this.gameManager.firstPlayerShoots +=1;
        this.secondPlayerMap[square] = "missed";
        this.gameManager.firstPlayerLongestStrike = 0;
        this.gameManager.firstPlayerLongestNoStrike += 1;
        if (this.gameManager.firstPlayerLongestNoStrike > this.gameManager.firstPlayerLongestNoStrikePeak){
          this.gameManager.firstPlayerLongestNoStrikePeak = this.gameManager.firstPlayerLongestNoStrike;
        }
        this.nextMoveFor = this.gameManager.secondPlayerName;
      }
      else {
        this.gameManager.snackBar.open("You have already shoot this square once! Please choose another field !", "OK");
      }
    }
    else if ((player === "player1") && (this.nextMoveFor === this.gameManager.secondPlayerName)){
      this.gameManager.sendInfo("Its not your turn ! Give a chance to your opponent ! ");
    }
    else if ((player === "player2") && (this.nextMoveFor === this.gameManager.secondPlayerName)){
      if (this.firstPlayerMap[square] === "ship"){
        this.gameManager.secondPlayerShoots +=1;
        this.gameManager.secondPlayerHits += 1;
        this.gameManager.secondPlayerLongestNoStrike = 0;
        this.gameManager.secondPlayerLongestStrike += 1;
        if (this.gameManager.secondPlayerLongestStrike > this.gameManager.secondPlayerLongestStrikePeak){
          this.gameManager.secondPlayerLongestStrikePeak = this.gameManager.secondPlayerLongestStrike;
        }
        this.firstPlayerMap[square] = "shooted";
      }
      else if ((this.firstPlayerMap[square] !== "shooted") && (this.firstPlayerMap[square] !== "missed")) {
        this.gameManager.secondPlayerShoots +=1;
        this.gameManager.secondPlayerLongestNoStrike += 1;
        this.gameManager.secondPlayerLongestStrike = 0;
        if (this.gameManager.secondPlayerLongestNoStrike > this.gameManager.secondPlayerLongestNoStrikePeak){
          this.gameManager.secondPlayerLongestNoStrikePeak = this.gameManager.secondPlayerLongestNoStrike;
        }
        this.firstPlayerMap[square] = "missed";
        this.nextMoveFor = this.gameManager.firstPlayerName;
      }
      else {
        this.gameManager.snackBar.open("You have already shoot this square once! Please choose another field !", "OK");
      }
    }
    else if ((player === "player2") && (this.nextMoveFor === this.gameManager.firstPlayerName)){
      this.gameManager.sendInfo("Its not your turn ! Give a chance to your opponent ! ");
    }
    this.checkWinner();
  }

  public checkWinner(){
    let firstPlayerHasShips = false;
    let secondPlayerHasShips = false;
    for(let i = 0; i < 24; i++){
      if (this.firstPlayerMap[i] === "ship"){
        firstPlayerHasShips = true;
      }
      if (this.secondPlayerMap[i] === "ship"){
        secondPlayerHasShips = true;
      }
    }

    if (firstPlayerHasShips === false){
      this.gameManager.gameWinner = this.gameManager.secondPlayerName;
      this.router.navigate(['/game-summary']);
    }
    if (secondPlayerHasShips === false){
      this.gameManager.gameWinner = this.gameManager.firstPlayerName;
      this.router.navigate(['/game-summary']);
    }
  }
}
