/* 
Instructions:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
*/

/* 
simple solution, and worthless:
function addBinary(a,b){
  return (a+b).toString(2);
}
*/

function addBinary(a, b) {
  let decimal = a + b;
  let bin = [];
  let i = 0;
  while (decimal > 0) {
    bin[i] = decimal % 2;
    decimal = Math.floor(decimal / 2);
    i += 1;
  }
  return bin.reverse().join("");
}
