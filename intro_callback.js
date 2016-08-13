// class Clock {
//   constructor() {
//     let date = new Date();
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();
//     this.hours = date.getHours();
//     this.printTime();
//     this.interval = 1000;
//     // console.log(this)
//     window.setInterval( this._tick.bind(this), 1000);
//     // clock();
//   }
//
//   printTime() {
//
//     let time = `${this.hours}:${this.minutes}:${this.seconds}`;
//     // Format the time in HH:MM:SS
//     console.log(time);
//     // Use console.log to print it.
//   }
//
//   _tick() {
//     // 1. Increment the time by one second.
//
//     if (++this.seconds === 60) {
//       this.seconds = 0;
//       this.minutes += 1;
//     }
//
//     if (this.minutes === 60) {
//       this.minutes = 0;
//       this.hours += 1;
//     }
//
//     this.hours = this.hours%24;
//
//     console.log(this);
//     // 2. Call printTime.
//     this.printTime();
//
//
//   }
// }

const readline = require('readline');



function addNumbers(sum, numsLeft, completionCallback) {

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  if( numsLeft.length > 0 ) {
    reader.question("Give me a number", (res) =>{
      let first = parseInt(res);
      if( first === first) {
        numsLeft.push(first);
      }
      // console.log(`checking the value of first: ${first}`);
      // console.log(`checking the value of numsLeft${numsLeft}`);
      sum += numsLeft.shift();
      // console.log(`checking the value of numsLeft after sum${numsLeft}`);
      // console.log(`checking the value of sum :${sum}`);
      reader.close();
      addNumbers(sum,numsLeft,completionCallback);

    });
  }else if( numsLeft.length === 0){
    return completionCallback(sum);
  }
  return;
}

// reader.question("Give me a number", (res) =>{
//   let first = parseInt(res);
//   console.log(first);
//   reader.close();
// });
addNumbers(0, [3], sum => console.log(`Total Sum: ${sum}`));
