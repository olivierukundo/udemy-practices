// function to check if a roll is a snake eyes
function isSnakeEyes({ num1, num2 }) {
  console.log({ num1, num2 });
  //check snake eyes using ternary operator
  num1 === 1 && num2 === 1
    ? console.log("snake eyes!")
    : console.log("Not Snake Eyes!");
}

// function to generate a random couple
function randomCouple() {
  num1 = Math.ceil(Math.random() * 6);
  num2 = Math.ceil(Math.random() * 6);

  return { num1, num2 };
}

// const TEST to check the isSnakeEyes function

const TEST = { num1: 1, num2: 1 };

isSnakeEyes(TEST);
isSnakeEyes(randomCouple());
