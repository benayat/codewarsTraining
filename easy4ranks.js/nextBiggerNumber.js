//first, lets make an array and insert all numbers:

function toArray(n) {
  let temp = n,
    array = [];
  while (temp > 0) {
    array.unshift(temp % 10);
    temp = Math.floor(temp / 10);
  }
  return array;
}

function NumberBiggerThanN(array) {
  let i = array.length - 1;
  while (array[i] <= array[i - 1]) i--;
  if (i == 0) return -1;
  let firstHalf = array.slice(0, i);
  let secondHalf = array.slice(i);
  secondHalf.sort((a, b) => a - b);
  let replaceIndex = 0;
  while (firstHalf[firstHalf.length - 1] >= secondHalf[replaceIndex])
    replaceIndex++;
  let temp = firstHalf[firstHalf.length - 1];
  firstHalf[firstHalf.length - 1] = secondHalf[replaceIndex];
  secondHalf[replaceIndex] = temp;
  return parseInt([...firstHalf, ...secondHalf].join(''));
}

function nextBigger(n) {
  //your code here
  const numbersArray = toArray(n);
  //lets find the next bigger number:
  return NumberBiggerThanN(numbersArray);
}
console.log(nextBigger(1));
