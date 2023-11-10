function getExtension(filename) {
    const parts = filename.split(".");
  
    const extension = parts.pop();
  
    if (extension === "") {
      return "";
    }
  
    return extension;
  }
  const filename = "Challenge_05.js";

const extension = getExtension(filename);

console.log(extension); 
