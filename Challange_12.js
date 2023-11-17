/*
Challenge 12
Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output:
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
*/

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    return `${hours}:${minutes}:${seconds}`;
  }
  
  function outputTime() {
    const time = getTime();
    console.log(time);
  }
    setInterval(outputTime, 1000);
  