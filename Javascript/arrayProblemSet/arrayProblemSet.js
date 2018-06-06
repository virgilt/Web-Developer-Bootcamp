function printReverse(arr) {
  var index = arr.length - 1;
  for (var i = index; i >=0; i--) {
    console.log(arr[i]);
  }
}

//this is where isUniform() starts
function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (first !== arr[i]) {
      return false
    }
  }
  return true;
}

//this is where sumArray() starts
function sumArray(arr) {
  //get number at index 0
  var total = arr[0];
  for (var i = 1; i < arr.length; i++) {
    var total = total + arr[i];
  }
  return total;
}

//this is where max() starts
function max(arr) {
  //get number at index 0
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      var max = arr[i];
    }
  }
  return max;
}
