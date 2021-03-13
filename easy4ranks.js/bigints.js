// function sumStrings(a, b) {
//   if (a == '') return b;
//   if (b == '') return a;

//   return (BigInt(a) + BigInt(b)).toString();
// }

function sumStrings(a, b) {
  if (a == '') return b;
  if (b == '') return a;
  const aArray = a
      .split('')
      .reverse()
      .map((x) => parseInt(x)),
    bArray = b
      .split('')
      .reverse()
      .map((x) => parseInt(x)),
    resultArray = [];
  let reminder = 0;
  for (let i = 0; i < Math.max(aArray.length, bArray.length); i++) {
    if (i >= aArray.length) {
      resultArray.push(bArray[i] + reminder);
      reminder = 0;
      continue;
    } else if (i >= bArray.length) {
      resultArray.push(aArray[i] + reminder);
      reminder = 0;
      continue;
    }
    let numberResult = aArray[i] + bArray[i] + reminder;
    reminder = Math.floor(numberResult / 10);
    numberResult = numberResult % 10;
    resultArray.push(numberResult);
    if (i === bArray.length - 1 && i === aArray.length - 1) {
      resultArray.push(reminder);
    }
  }
  return resultArray.reverse().join('').replace(/^0+/, '');
}

console.log(sumStrings('99', '99'));
