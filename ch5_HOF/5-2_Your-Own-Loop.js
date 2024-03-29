/*
Write a higher-order function loop that provides something 
like a for loop statement. It takes a value, a test function, 
an update function, and a body function. Each iteration, it 
first runs the test function on the current loop value and 
stops if that returns false. Then it calls the body function, 
giving it the current value. Finally, it calls the update 
function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/

// recursive version
const loopRecurse = (currValue, testFunc, updateFunc, bodyFunc) => {
  if (testFunc(currValue)) {
    bodyFunc(currValue);
    loop(updateFunc(currValue), testFunc, updateFunc, bodyFunc);
  }
};

// for-loop version
const loop = (currValue, testFunc, updateFunc, bodyFunc) => {
  for (let index = currValue; testFunc(index); index = updateFunc(index)) {
    bodyFunc(index);
  }
};

loopRecurse(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
