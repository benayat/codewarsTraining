let arrayN = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];
let array3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let array4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

function legitimateIndex(index, array, set) {
  return (
    index[0] < array[0].length &&
    index[0] >= 0 &&
    index[1] < array.length &&
    index[1] >= 0 &&
    !set.has(`${index[0]} ${index[1]}`)
  );
}

function getNextIndex(currentMove, currentIndex, array, visited) {
  let nextIndexNaive;
  let nextIndexChoise;
  const nextIndexRight = [currentIndex[0], currentIndex[1] + 1];
  const nextIndexLeft = [currentIndex[0], currentIndex[1] - 1];
  const nextIndexDown = [currentIndex[0] + 1, currentIndex[1]];
  const nextIndexUp = [currentIndex[0] - 1, currentIndex[1]];
  switch (currentMove) {
    case 'right': {
      nextIndexNaive = nextIndexRight;
      nextIndexChoise = nextIndexDown;
      nextChoiseMove = 'down';
      break;
    }
    case 'left': {
      nextIndexNaive = nextIndexLeft;
      nextIndexChoise = nextIndexUp;
      nextChoiseMove = 'up';
      break;
    }
    case 'up': {
      nextIndexNaive = nextIndexUp;
      nextIndexChoise = nextIndexRight;
      nextChoiseMove = 'right';
      break;
    }
    case 'down': {
      nextIndexNaive = nextIndexDown;
      nextIndexChoise = nextIndexLeft;
      nextChoiseMove = 'left';
      break;
    }
    default:
      break;
  }
  if (legitimateIndex(nextIndexNaive, array, visited)) {
    return [currentMove, nextIndexNaive];
  } else if (legitimateIndex(nextIndexChoise, array, visited)) {
    return [nextChoiseMove, nextIndexChoise];
  } else return false;
}

function snalePace(array) {
  if (!array[0][0]) return [];
  const visited = new Set();
  let currentIndex = [0, 0];
  let currentMove = 'right';
  const newArray = [];
  let nextIndex;
  while (
    (moveIndexCouple = getNextIndex(currentMove, currentIndex, array, visited))
  ) {
    currentMove = moveIndexCouple[0];
    nextIndex = moveIndexCouple[1];
    newArray.push(array[currentIndex[0]][currentIndex[1]]);
    visited.add(`${currentIndex[0]} ${currentIndex[1]}`);
    currentIndex = nextIndex;
  }
  newArray.push(array[currentIndex[0]][currentIndex[1]]);
  return newArray;
}
console.log(snalePace(array4));
// let array4 = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];
