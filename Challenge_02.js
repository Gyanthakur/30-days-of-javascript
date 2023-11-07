/*
Challenge 2:
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string: 'the quick brown fox' Expected Output: 'The Quick Brown Fox'
*/


function capitalizeFirstLetter(str) {
	str = str.toLowerCase();
	str = str.replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
	return str;
}
const inputString = "challenge two has been completed of thirty days javascript";
const capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString); // "The Quick Brown Fox Jumps Over The Lazy Dog"
