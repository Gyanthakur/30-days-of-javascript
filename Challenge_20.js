function findFirstNegative(array) {
    return array.find(element => element < 0);
  }
  const firstNegative = findFirstNegative([1, 2, 3, -4, 5]);

  console.log(firstNegative);
  const firstNegative1 = findFirstNegative([1, 2, 3, 4, 5]);

  console.log(firstNegative1); 
      