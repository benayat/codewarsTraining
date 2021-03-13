let numberOfSteps = Number.MAX_SAFE_INTEGER;
function pathFinderRecursion(currentNumberOfsteps, maze, current) {
  currentNumberOfsteps++;
  if (
    current[0] < 0 ||
    current[0] > maze.length - 1 ||
    current[1] < 0 ||
    current[1] > maze.length - 1 ||
    maze[current[0]][current[1]] === 'W'
  ) {
    return false;
  }
  if (current[0] === maze.length - 1 && current[1] === maze.length - 1) {
    currentNumberOfsteps -= 1;
    numberOfSteps =
      numberOfSteps < currentNumberOfsteps
        ? numberOfSteps
        : currentNumberOfsteps;
    return;
  }
  maze[current[0]][current[1]] = 'W';
  pathFinderRecursion(currentNumberOfsteps, maze, [current[0], current[1] + 1]);
  pathFinderRecursion(currentNumberOfsteps, maze, [current[0], current[1] - 1]);
  pathFinderRecursion(currentNumberOfsteps, maze, [current[0] + 1, current[1]]);
  pathFinderRecursion(currentNumberOfsteps, maze, [current[0] - 1, current[1]]);
  maze[current[0]][current[1]] = '.';
  return;
}

function pathFinder(maze) {
  let currentIndex = [0, 0];
  let straitStringArray = maze.split('\n');
  let matrix = straitStringArray.map((x) => x.split(''));

  pathFinderRecursion(0, matrix, currentIndex);
  if (numberOfSteps < Number.MAX_SAFE_INTEGER) {
    return numberOfSteps;
  } else {
    return false;
  }
}
let maze1 = `.W.
.W.
...`;
let maze2 = `.W.
.W.
W..`;
let maze3 = `......
......
......
......
......
......`;
let maze4 = `......
......
......
......
.....W
....W.`;
let maze5 = `.W.
.W.
...`;
let maze6 = `......
......
......
......
......
......`;
let maze7 = `.....
.....
.....
.....
.....`;
let maze8 = `..
..`;
let maze9 = `.W.
.W.
W..`;
console.log(pathFinder(maze9));
// console.log(pathFinder(maze2));
