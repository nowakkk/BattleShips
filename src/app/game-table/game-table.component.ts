import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.sass']
})
export class GameTableComponent implements OnInit {

  squares: any[] = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
                       "X", "X", "ship", "X", "X", "X", "X", "/assets/images/ship.jpg", "/assets/images/ship.jpg", "/assets/images/ship.jpg"];
  rowsCount: number = 5;
  columnsCount: number = 5;

  constructor() {
  }

  ngOnInit(): void {
  }

  public checkSquare(square: number){
    console.log("to pole na początku ma taki state : " + this.squares[square]);
    if (this.squares[square] === "ship"){
      this.squares[square] = "shooted";
    }
    if (this.squares[square] !== "shooted") {
      this.squares[square] = "missed";
    }
  }

}
