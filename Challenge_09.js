/*
Challenge 9
Write a JavaScript function to find the first not repeated character.
Sample arguments: 'abacddbec'
Expected output: 'e'
*/

function firstNonRepeatedCharacter(str) {
    var char;
  
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        char = str[i];
        break;
      }
    }
  
    return char || '_';
  }
  
  var str = 'abacddbec';

  var firstNonRepeatedChar = firstNonRepeatedCharacter(str);
  
  console.log(firstNonRepeatedChar);
  