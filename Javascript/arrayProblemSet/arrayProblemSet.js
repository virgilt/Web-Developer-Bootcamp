function printReverse(arr) {
  var index = arr.length - 1;
  for (var i = index; i >=0; i--) {
    console.log(arr[i])
  }
}


function isUniform(arr) {
  var first = arr[0];
  var compare = true;
  for (var i = 0; i < arr.length && compare === true; i++) {
    var compare = (first === arr[i]);
    // console.log(compare);
    }
  return compare
}


function sumArray(arr) {
  //get number at index 0
  var total = arr[0];
  //get length of arrayProblemSet
  var length = arr.length;

  for (var i = 1; i < length; i++) {
    var total = total + arr[i];
  }
  return total
}



function max(arr) {
  //get number at index 0
  var number = arr[0];
  //get length of array
  var length = arr.length;

  for (var i = 1; i < length; i++) {
    if (number > arr[i]) {
      var bigNum = number;
    }
    else {
      var bigNum = arr[i];
    }
  }
  return bigNum
}
