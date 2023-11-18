/*
Challenge 13
Problem Statement: Implement a memoization function.
Description: Write a function that takes a function as its argument and returns a memoized version of the function.
Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
*/

function memoize(fn) {
    const cache = {};
  
    return function(...args) {
      const key = args.join(',');
  
      if (cache[key]) {
        return cache[key];
      }
  
      const result = fn(...args);
      cache[key] = result;
  
      return result;
    };
  }
  
  
  const fibonacci = memoize(function(n) {
    if (n <= 1) {
      return n;
    }
  
    return fibonacci(n - 1) + fibonacci(n - 2);
  });
  
  console.log(fibonacci(10)); 
  