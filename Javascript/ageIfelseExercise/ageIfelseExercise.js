var age = prompt("What is your age?");
var root = Math.sqrt(age);
var squared = root * root;

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue.");
}
else if (age < 21) {
  console.log("You can enter, but cannot drink.");
}
else {
  console.log("Come on in. You can drink.");
}

if (age < 0) {
  console.log("Your age cannot be negative.");;
}

if (age == 21) {
  console.log("Happy 21st Birthday!");
}

if ((age % 2) !== 0 ) {
  console.log("Your age is odd!");
}


if (squared == age) {
  console.log("Perfect square!");
}
