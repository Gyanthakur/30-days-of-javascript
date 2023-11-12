/*
Challenge 7
Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
*/

function checkPair(x, y) {
    return ((x === 50 || y === 50) || (x + y === 50));
  }
  
  
  const result1 = checkPair(50, 0); 
  const result2 = checkPair(25, 25); 
  const result3 = checkPair(10, 40); 
  const result4 = checkPair(1, 1); 
  
  console.log(result1); 
  console.log(result2); 
  console.log(result3); 
  console.log(result4); 
  