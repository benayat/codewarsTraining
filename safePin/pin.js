function returnAllOptions(digit) {
  let digitNumber = parseInt(digit);
  if (digitNumber == 0) return ['0', '8'];
  const array = [
    (digitNumber - 1) % 3 == 0 ? 10 : digitNumber - 1,
    digitNumber % 3 === 0 ? 10 : digitNumber + 1,
    digitNumber === 8 ? 0 : digitNumber + 3,
    digitNumber <= 3 ? -1 : digitNumber - 3,
    digitNumber,
  ];
  const newArray = [];
  for (number of array) {
    if ((number > 0 && number < 10) || (digitNumber === 8 && number === 0)) {
      newArray.push(number + '');
    }
  }
  return newArray;
}

function getPINs(observed) {
  // TODO: This is your job, detective!
  let combinatoinsArray = [];
  let resultSet = new Set();
  for (let i = 0; i < observed.length; i++) {
    combinatoinsArray.push(returnAllOptions(observed.charAt(i)));
  }
  let previous = 0;
  let current;

  for (current = 1; current < combinatoinsArray.length; current++) {
    combinatoinsArray[previous] = combinatoinsArray[previous].reduce(
      (accumulator, currentValue) => {
        for (digit of combinatoinsArray[current]) {
          accumulator.push(currentValue + '' + digit);
        }
        return accumulator;
      },
      []
    );
  }
  return combinatoinsArray[previous];
}

console.log(getPINs('8'));
