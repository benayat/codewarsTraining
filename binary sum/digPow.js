function digPow(n, p) {
  let digits = n
    .toString()
    .split("")
    .reduce((array, val, i) => {
      array.push(Math.pow(val, p + i));
    }, [])
    .reduce((accumulator, val) => accumulator + val);
  return n === parseInt(n) ? n : -1;
}
console.log(digPow(89, 1));
