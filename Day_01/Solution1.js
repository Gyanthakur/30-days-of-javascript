
/*

Challenge 1:
Write a JavaScript function that reverses a number.
Sample Data and output:
Example:
x = 32243;
Expected Output: 34223

*/


function reverseNumber(num) {
    // Convert the number to a string.
    const strNum = num.toString();
  
    // Split the string into an array of characters.
    const arrNum = strNum.split('');
  
    // Reverse the array.
    arrNum.reverse();
  
    // Join the array back into a string.
    const reversedStrNum = arrNum.join('');
  
    // Convert the string back to a number.
    const reversedNum = Number(reversedStrNum);
  
    // Return the reversed number.
    return reversedNum;
  }
  

const x = 32243;
const reversedNum = reverseNumber(x);

console.log(reversedNum); // 34223
