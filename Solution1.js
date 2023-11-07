
/*
Day 01
Challenge 1:
Write a JavaScript function that reverses a number.
Sample Data and output:
Example:
x = 32243;
Expected Output: 34223

*/


function reverseNumber(num) {
    const strNum = num.toString();
    const arrNum = strNum.split('');
    arrNum.reverse();
    const reversedStrNum = arrNum.join('');
    const reversedNum = Number(reversedStrNum);
    return reversedNum;
  }
const x = 32243;
const reversedNum = reverseNumber(x);

console.log(reversedNum);
