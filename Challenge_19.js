/*
Problem Description:
Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.
Inputs:
An array of numbers.
Outputs:
A boolean value. Return true if all numbers are positive, otherwise false.
Hints:
The every() method tests whether all elements in the array pass the test implemented by the provided function.
Solution Approach:
Use the every() method and provide a callback that checks if the number is positive.
*/

function allPositive(array) {
	return array.every(function (element) {
		return element > 0;
	});
}
const array = [1, 2, 3, 4, 5];

const isAllPositive = allPositive(array);

if (isAllPositive) {
	console.log("All numbers in the array are positive.");
} else {
	console.log("At least one number in the array is not positive.");
}
