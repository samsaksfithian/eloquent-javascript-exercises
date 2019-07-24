/*
Given an array of promises, Promise.all returns a promise that 
waits for all of the promises in the array to finish. It then 
succeeds, yielding an array of result values. If a promise in 
the array fails, the promise returned by all fails too, with 
the failure reason from the failing promise.

Implement something like this yourself as a regular function 
called PromiseAll.

Remember that after a promise has succeeded or failed, it can’t 
succeed or fail again, and further calls to the functions that 
resolve it are ignored. This can simplify the way you handle 
failure of your promise.
*/

function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
  });
}

// Test code.
PromiseAll([]).then(array => {
  console.log('This should be []:', array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
PromiseAll([soon(1), soon(2), soon(3)]).then(array => {
  console.log('This should be [1, 2, 3]:', array);
});
PromiseAll([soon(1), Promise.reject('X'), soon(3)])
  .then(array => {
    console.log('We should not get here');
  })
  .catch(error => {
    if (error !== 'X') {
      console.log('Unexpected failure:', error);
    }
  });
