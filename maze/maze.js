function pathFinderRecursion(maze, current) {
  if (
    current[0] < 0 ||
    current[0] > maze.length - 1 ||
    current[1] < 0 ||
    current[1] > maze.length - 1 ||
    maze[current[0]][current[1]] === 'W'
  ) {
    return false;
  }
  maze[current[0]][current[1]] = 'W';

  if (current[0] === maze.length - 1 && current[1] === maze.length - 1)
    return true;
  if (
    pathFinderRecursion(maze, [current[0], current[1] + 1]) ||
    pathFinderRecursion(maze, [current[0], current[1] - 1]) ||
    pathFinderRecursion(maze, [current[0] + 1, current[1]]) ||
    pathFinderRecursion(maze, [current[0] - 1, current[1]])
  )
    return true;
  return false;
}

function pathFinder(maze) {
  let currentIndex = [0, 0];
  let n = maze.split('\n').length ** 2;
  let straitStringArray = maze.split('\n');
  let matrix = straitStringArray.map((x) => x.split(''));

  if (pathFinderRecursion(matrix, currentIndex)) return true;
  return false;
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
console.log(pathFinder(maze5));
// console.log(pathFinder(maze2));
