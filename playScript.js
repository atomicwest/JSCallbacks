const Game = require("./towersOfHanoi");


const readline = require('readline');

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let completionCallback = function() { console.log("Do you want to play again?")};


const hanny = new Game(reader, completionCallback);
hanny.run(hanny.compCallback);
