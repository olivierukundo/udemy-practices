// // function to check if a roll is a snake eyes
// function isSnakeEyes({ num1, num2 }) {
//   console.log({ num1, num2 });
//   //check snake eyes using ternary operator
//   num1 === 1 && num2 === 1
//     ? console.log("snake eyes!")
//     : console.log("Not Snake Eyes!");
// }

// // function to generate a random couple
// function randomCouple() {
//   num1 = Math.ceil(Math.random() * 6);
//   num2 = Math.ceil(Math.random() * 6);

//   return { num1, num2 };
// }

// // const TEST to check the isSnakeEyes function

// const TEST = { num1: 1, num2: 1 };

// isSnakeEyes(TEST);
// isSnakeEyes(randomCouple());


// this is the code i wrote after running yours and got an error
function isSnakeEyes(firstDig, SecondDig){
  if(firstDig === 1 && SecondDig === 1){
      console.log("Snake Eyes")
  } else if( firstDig === 1 || SecondDig !== 1){
      console.log("Not Snake Eyes")
  } else {
     console.log("Not Snake Eyes")
  }
}

let firstDig = Math.floor(Math.random() * 6) + 1;
let SecondDig = Math.floor(Math.random() * 6) + 1;

// //  didn't work either i can not tell where i wwent wrong