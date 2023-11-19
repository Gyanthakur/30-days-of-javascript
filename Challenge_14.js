/*
Write a JavaScript function to concatenate a given string n times (default is 1). Go to the
editor
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
Outputs
"Ha!"
"Ha! Ha!"
"Ha! Ha! Ha!"
*/


function repeat(str, ha = 1) {
    return [...Array(ha)].map(() => str).join('');
  }
  
  console.log(repeat('Ha!')); 
  console.log(repeat('Ha!', 2)); 
  console.log(repeat('Ha!', 3)); 

const spaces = repeat(' ', 10);
console.log(spaces); 
