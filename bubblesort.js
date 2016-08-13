


const readline = require('readline');


function askIfGreaterThan(el1, el2, callback) {
  let reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });



  reader.question(`Compare ${el1} > ${el2} ?`, (res) =>{
    let first = res;
    reader.close();
    if (first === "yes") {
      callback(true);
    } else {
      callback(false);
    }

  });

}


// askIfGreaterThan(3, 4, (bool) => console.log(bool));

function innerBubbleSortLoop(arr, i, madeAnySwaps, callback) {

  if (i < arr.length - 1) {

    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        let temp1 = arr[i];
        let temp2 = arr[i+1];
        arr[i] = temp2;
        arr[i+1] = temp1;
        madeAnySwaps = true;
        console.log("running isGreaterThan");
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, callback );
      } else {
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, callback );
      }
    });

  } else if (i === (arr.length - 1)) {
    callback(madeAnySwaps);
    // console.log("In outer bubble loop");
  }

  return " ";

}



function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        // console.log(arr);
    } else {
      sortCompletionCallback(arr);
    }
  }

}

// console.log(innerBubbleSortLoop([4,2,3,1], 0, false, () => {}));

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  // reader.close();
});
