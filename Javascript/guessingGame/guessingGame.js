//create number
var number = 7;

//ask for guess
var stringGuess = (prompt("Guess a number!");

//convert to number
var guess = Number(stringGuess);

//check if correct
if (guess === number) {
    alert("You guessed it!");
}

//if too high
else if (guess < number) {
  alert("Too low! Try again!");
}

//if too low
else {
  alert("Too high! Try again!");
}
