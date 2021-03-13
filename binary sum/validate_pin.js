/* 
instructions: 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

/* 
important notes: 
str.length doesn't work here!! since it counts code units, and not characters. for example, ,.' will not be counted. we have to use an iterator that iterates over code: [...str].length.
*/

function validatePIN(pin) {
  return (
    pin.replace(/[^0-9]/g, "") === pin &&
    ([...pin].length == 4 || [...pin].length == 6)
  );
}
console.log(validatePIN("0000"));
/* 
a better solution I found: 
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

*/
