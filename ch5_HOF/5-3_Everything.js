/*
Analogous to the some method, arrays also have an every method. 
This one returns true when the given function returns true for 
every element in the array. In a way, some is a version of the 
|| operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate 
function as parameters. Write two versions, one using a loop and 
one using the some method.
*/

function everyWLoop(array, testFunc) {
  for (let index = 0; index < array.length; index++) {
    if (!testFunc(array[index])) {
      return false;
    }
  }
  return true;
}

function everyWSome(array, testFunc) {
  return !array.some(element => !testFunc(element));
}

function everyWHOF(array, testFunc) {
  return array.filter(element => testFunc(element)).length === array.length;
}

function every(array, testFunc, type = 3) {
  // Your code here.
  switch (type) {
    case 2:
      return everyWSome(array, testFunc);
    case 3:
      return everyWHOF(array, testFunc);
    default:
      return everyWLoop(array, testFunc);
  }
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
