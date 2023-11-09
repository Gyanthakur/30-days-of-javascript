/*
Challenge 4:
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/


const side1 = 5;
const side2 = 6;
const side3 = 7;
const perimeter = (side1 + side2 + side3) / 2;
const area = Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3));
console.log(`The area of the triangle is ${area}`);
