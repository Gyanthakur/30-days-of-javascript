/*
Challenge 18
Problem Description:
Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.
Inputs:
An array of numbers.
Outputs:
An array of numbers where each number is doubled.
Hints:
The map() method creates a new array with the results of calling a function for every array element.
@everyone
*/

function doubleValues(array) {
    return array.map(function(number) {
      return number * 2;
    });
  }
  const array = [1, 2, 3, 4, 5];
  const doubledArray = doubleValues(array);
  
  console.log(doubledArray);
    