function division(x, y) {
  if (arguments.length != 2) throw "You must enter 2 parametrs";
  else return x / y;
}
// console.log(division("mohamed"));
// console.log(division(2, 3, 4));
console.log(division(10, 5));

function add() {
  var sum = 0;
  if (arguments.length == 0) throw "please enter only numbers";
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != "number") {
      throw "please enter only numbers";
    } else {
      sum += arguments[i];
    }
  }
  console.log("sum of arguments is: " + sum);
}
add(2, 3, 4);

function anynumber_first_reverse() {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != "number") throw "only Numbers allawoed ";
    arr[i] = arguments[i];
  }
  return arr.reverse();
}
console.log(anynumber_first_reverse(2, 3, 4, 1));

function anynumber_second_reverse() {
  var arr = [];
  var lastindex = arguments.length - 1;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != "number") throw "only Numbers allawoed ";
    // arr[i] = arguments[lastindex];
    arr.push(arguments[lastindex]);
    lastindex--;
  }
  return arr;
}

console.log(anynumber_second_reverse(2, 3, 8, 1, 9, 3, 1, 4, 5, 10));
