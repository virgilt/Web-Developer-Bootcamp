var numOne = -10;
console.log("Print all numbers between -10 and -19");
while (numOne < 20) {
  console.log(numOne);
  numOne++;
}

var numTwo = 10;
console.log("Print all even numbers between 10 and 40");
while (numTwo < 41) {
  console.log(numTwo);
  numTwo+=2;
}

var numThree = 301;
console.log("Print all odd numbers between 300 and 333");
while (numThree < 334) {
  console.log(numThree);
  numThree+=2;
}

var numFour = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while (numFour <= 50){
  if (numFour % 5 === 0 && numFour % 3 === 0){
    console.log(numFour);
  }
  numFour++;
}
