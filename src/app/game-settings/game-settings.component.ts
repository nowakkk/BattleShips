import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.sass']
})
export class GameSettingsComponent implements OnInit {

  firstPlayerName: string = "";
  secondPlayerName: string = "";

  constructor(private router: Router, private gameManager: GameManagerService) { }

  ngOnInit(): void {
  }

  public startTheGame(){
    if ((this.checkUsernameFormat(this.firstPlayerName) === true) && (this.checkUsernameFormat(this.secondPlayerName) === true)){
      console.log("The Battle : " + this.firstPlayerName + " vs. " + this.secondPlayerName);
      this.gameManager.firstPlayerName = this.firstPlayerName;
      this.gameManager.secondPlayerName = this.secondPlayerName;
      this.router.navigate(['/player-setup']);
    }
    else { console.log("Usernames format is incorrect ! ")}
  }

  private checkUsernameFormat(username: string): boolean{
    for (let i = 0; i < username.length; i++){
      if (username[i] != " "){ return true; }
    }
    this.gameManager.snackBar.open("Usernames cannot be empty! ", "OK");
    return false;
  }

}
