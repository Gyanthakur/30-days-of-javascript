/*
Challenge 11
Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name: "David Rayy",
sclass: "VI",
rollno: 12 };
Sample Output: name,sclass,rollno 
*/


function listObjectProperties(object) {
    const propertyNames = [];
  
    for (const [key, value] of Object.entries(object)) {
      propertyNames.push(key);
    }
  
    return propertyNames;
  }
  
  const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  
  const propertyNames = listObjectProperties(student);
  
  console.log(propertyNames.join(", "));
  