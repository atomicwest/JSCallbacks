// hanoi prototype run is function () {
//   until the game is won
//     get move from player
//     if valid move
//     make move on bord
//     check if game won
//
//   end

class Game {
  constructor(reader, compCallback) {
    this.stacks = [[1,2,3] , [] , []];
    this.compCallback = compCallback;
    this.reader = reader;
  }

  promptMove(callback) {

    // console.log(this.stacks);
    this.reader.question('Which tower do you want to select from?', (res)=>{
      let firstTower = parseInt(res);
      this.reader.question('Which tower do you want to place it on?', (res2)=>{
        let placeTower = parseInt(res2);
        // this.reader.close();
        let output = this.move(firstTower,placeTower);
        if(!output) {
          console.log("that was a bad move");
        }
        callback();
      });
    });
  }

  move(firstTower,placeTower) {
    // console.log(`this.validmove logic ${this.validMove(firstTower, placeTower)}`);
    if( this.validMove(firstTower, placeTower)) {
      let movingPiece = this.stacks[firstTower].shift();
      this.stacks[placeTower].unshift(movingPiece);
      // console.log(`the first stack is ${this.stacks[0]}`);
      // console.log(`the second stack is ${this.stacks[1]}`);
      // console.log(`the third stack is ${this.stacks[2]}`);
      return true;
    } else {
      return false;
    }
  }

  validMove(firstTower,placeTower) {
    let placeTowerValue = this.stacks[placeTower][0];
    let firstTowerValue = this.stacks[firstTower][0];
    if (placeTowerValue === undefined) { placeTowerValue = Infinity; }
    if (firstTowerValue === undefined) { firstTowerValue = Infinity; }
    // console.log(`Place Tower value ${placeTowerValue}`);
    // console.log(`pick Tower value ${firstTowerValue}`);
    return placeTowerValue > firstTowerValue;
  }

  isWon() {
    let firstStackEmpty, secondStackFull, thirdStackFull;
    firstStackEmpty = (this.stacks[0].length === 0);
    secondStackFull = (this.stacks[1].length === 3);
    thirdStackFull = (this.stacks[2].length === 3);
    return firstStackEmpty && (secondStackFull || thirdStackFull);
  }

  run(completionCallback) {
    this.promptMove(()=>{
      if(this.isWon()) {
        completionCallback();
        this.reader.close();
      } else {
        this.run(completionCallback);
      }
    });
  }
}


module.exports = Game;


// let hanny = new Game;
// hanny.run(() => {
//   console.log("completion callback you won!");
// }
// );
