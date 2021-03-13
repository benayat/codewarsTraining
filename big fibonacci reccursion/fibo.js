const linear = require('./gauss-jordan');
// List A represents first values of the sequence, namely
// *F(0) == A(0), F(1) == A(1), ..., F(len(A)-1) = A(len(A)-1)
// List B represents coefficients of recurrent equation
// *F(n) = B(0)*F(n-1) + B(1)*F(n-2) + ... + B(len(B)-1)*F(n-len(B))
// n is the index of number in the sequence, which you need to return.
x^k-Bi*x^n-1-i.
/* 
There are 100 random tests. 2 <= len(A) == len(B) <= 5, 0 <= n <= 100000. Initial values are in range [-5; 5], and the coefficients are in range [-2; 2]


*/

// function generalizedFibonacchi(a, b, n) {
//   if (n < a.length) return BigInt(a[n]);
//   let fiboSum = 0n;
//   for (let i = 0; i < b.length; i++) {
//     let previousResult = generalizedFibonacchi(a, b, n - i - 1);
//     fiboSum = fiboSum + BigInt(b[i]) * previousResult;
//   }
//   return fiboSum;
// }

function generalizedFibonacchi(a, b, n) {
  const characteristicRoots = [];
  let k = b.length;
  for (let j = -5; j <= 5; j++) {
    const rootCheck = b.reduce((accumulator, currentvalue, index) => {
      return accumulator - currentvalue ** index * j ** (k - 1 - index);
    }, j ** k);
    console.log(rootCheck);
    if (rootCheck === 0) characteristicRoots.push(rootCheck);
  }
  const equations = [];
  for (let i = 0; i < a.length; i++) {
    equations.push(characteristicRoots.map((x) => [x ** i]));
  }
  const solutions = linear.solve(equations, a);
  for (let i = 0; i < a.length; i++) {
    solutions.reduce((accumulator, currentvalue, index) => {
      accumulator + currentvalue * characteristicRoots[index] ** n;
    });
  }
}
console.log(generalizedFibonacchi([0, 1], [1, 1], 8));
