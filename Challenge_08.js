/*
Challenge 8
Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
Sample array: [1, 2, 3] and subset length is 2 Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
*/

function getCombinations(array, subsetLength) {
    if (subsetLength === 1) {
      return array.map((item) => [item]);
    }
  
    const combinations = [];
    for (let i = 0; i < array.length; i++) {
      const remainingArray = array.slice(i + 1);
      const smallerCombinations = getCombinations(remainingArray, subsetLength - 1);
  
      for (const smallerCombination of smallerCombinations) {
        combinations.push([array[i], ...smallerCombination]);
      }
    }
  
    return combinations;
  }
  
  const sampleArray = [1, 2, 3];
  const subsetLength = 2;
  
  const combinations = getCombinations(sampleArray, subsetLength);
  
  console.log(combinations); // [[2, 1], [3, 1], [3, 2]]
  