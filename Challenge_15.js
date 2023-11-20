

function string_chop(string, size) {
    if (string === "" || size <= 1) {
      return [string];
    }
  
    const choppedString = [];
  
    for (let i = 0; i < string.length; i += size) {
      const substring = string.substring(i, i + size);
  
      choppedString.push(substring);
    }
  
    return choppedString;
  }

  console.log(string_chop("Scaler")); 
  console.log(string_chop("Scaler", 2)); 
  