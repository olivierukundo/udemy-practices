// function to generate an array of n integers from 0 to n

function arrayOfNumbers(n) {
  let arrayOutput = [];
  for (let i = 0; i < n + 1; i++) {
    arrayOutput.push(i);
  }
  console.log(arrayOutput);
  return arrayOutput;
}

//Function to square entries of an array and return a new array of squares using for...of

function squareArrayEntries(arr) {
  let newArray = [];

  for (const a of arr) {
    let b = a * a;
    newArray.push(b);
  }
  console.log(newArray);
  return newArray;
}

squareArrayEntries(arrayOfNumbers(10));

// function to reduce array entries to their sum using for...of

function arraySum(arr) {
  let total = 0;
  for (a of arr) {
    total += a;
  }

  console.log(total);
  return total;
}

arraySum(squareArrayEntries(arrayOfNumbers(10)));
