/* 
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 */
function comp(array1, array2) {
  //your code here
  function reducerSum(accumulator, val) {
    return accumulator + val;
  }
  function reduecerSquare(arr, val) {
    arr.push(Math.pow(val, 2));
    return arr;
  }
  function sorter(a, b) {
    return a - b;
  }
  if (array1.reduce(reducerSum, 0) > array2.reduce(reducerSum, 0)) {
    let temp = array2;
    array2 = array1;
    array1 = temp;
  }
  array1 = array1.reduce(reduecerSquare, []).sort(sorter);
  array2 = array2.sort(sorter);
  return JSON.stringify(array1) === JSON.stringify(array2) ? true : false;
}
let a = [];
let b = [];
console.log(comp(a, b));
