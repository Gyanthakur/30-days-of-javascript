/*
Challenge 6
Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
*/

function tripleOrSum(x,y)
{
    if(x==y)
        return 3*(x+y);
    else
        return x+y;
}

const x = 10;
const y = 30;
console.log(tripleOrSum(x,y));
const a = 20;
const b = 20;
console.log(tripleOrSum(a,b));