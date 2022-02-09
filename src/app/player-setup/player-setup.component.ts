import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../game-manager.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-setup',
  templateUrl: './player-setup.component.html',
  styleUrls: ['./player-setup.component.sass']
})
export class PlayerSetupComponent implements OnInit {

  shipsAmount: number;
  firstPlayerDone: boolean = false;
  currentAlocPlayer: string;

  squares: any[] = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
                       "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];

  firstPlayerMap: any[] = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
  "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];

  secondPlayerMap: any[] = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
  "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];


  constructor(private gameManager: GameManagerService, private snackBar: MatSnackBar, private router: Router) {
    this.shipsAmount = gameManager.shipAmount;
    this.currentAlocPlayer = gameManager.firstPlayerName;
   }

  ngOnInit(): void {
  }

  public setupShip(square: number){
      if ((this.squares[square] !== "ship") && (this.shipsAmount > 0)){
        this.squares[square] = "ship";
        this.shipsAmount--;
      }
      else if ((this.squares[square] === "ship") && (this.shipsAmount >= 0)){
        this.squares[square] = "X";
        this.shipsAmount++;
      }
    
    else {
      this.gameManager.sendInfo("Looks like you have no more ships to allocate ! ");
    }
  }

  public goFurther(){
    if (this.shipsAmount === 0){
      if (this.firstPlayerDone === false){
        this.gameManager.firstPlayerMap = this.squares;
        this.squares = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
        "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];
        this.firstPlayerDone = true;
        this.currentAlocPlayer = this.gameManager.secondPlayerName;
        this.shipsAmount = this.gameManager.shipAmount;
        console.log("dodalem do managera : " + this.gameManager.firstPlayerMap)
      }
      else if (this.firstPlayerDone === true){
        this.gameManager.secondPlayerMap = this.squares;
        console.log("dodalem do managera drugie : " + this.gameManager.secondPlayerMap)
        this.router.navigate(['/game-window'])
      }
    }
    else {
      this.gameManager.sendInfo("You still have " + this.shipsAmount + " ships to allocate ! ");
    }
  };

}
