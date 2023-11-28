function counter() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    };
  }
  const myCounter = counter();

  console.log(myCounter()); 
  console.log(myCounter()); 
  console.log(myCounter()); 
    