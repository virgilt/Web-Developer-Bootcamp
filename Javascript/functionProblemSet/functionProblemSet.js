function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  var result = num;
  for (var i = num - 1; i >= 1; i--) {
    result *= i;
  }
  return result
}

function kebabTOSnake(str) {
  var re = /-/g;
  var newStr = str.replace(re, "_");
  return newStr
}
