/* 
identity check: 1 for battleShip, 2 for cruiser, 3 for destroyer, 4 for submarine.
validity check: -1 if a rule is broken.
type: 1 for horizontal, 0 for vertical.
*/
let tools = [0, 0, 0, 0];
//validity: check max ammount of ships.
function checkTools() {
  for (let i = 0; i < 4; i++) {
    if (tools[i] > i + 1) return false;
  }
  return true;
}

function checkToolsFinal() {
  for (let i = 0; i < 4; i++) {
    if (tools[i] !== i + 1) return false;
  }
  return true;
}

function checkDiagonal(field, x, y) {
  if (x < 9 && x > 0 && y < 9 && y > 0) {
    if (
      field[x + 1][y + 1] === 1 ||
      field[x - 1][y + 1] === 1 ||
      field[x - 1][y - 1] === 1 ||
      field[x + 1][y - 1] === 1
    )
      return false;
  } else if (x < 9 && y > 0 && y < 9) {
    if (field[x + 1][y + 1] === 1 || field[x + 1][y - 1] === 1) return false;
  } else if (x > 0 && y > 0 && y < 9) {
    if (field[x - 1][y - 1] === 1 || field[x - 1][y + 1] === 1) return false;
  } else if (x < 9 && x > 0 && y < 9) {
    if (field[x + 1][y + 1] === 1 || field[x - 1][y + 1] === 1) return false;
  } else if (x < 9 && x > 0 && y > 0) {
    if (field[x - 1][y - 1] === 1 || field[x + 1][y - 1] === 1) return false;
  }
  return true;
}

function checkIdentity(field, index) {
  let counter = 1;
  let type = 1;
  let x = index[0],
    y = index[1];
  if (!checkDiagonal(field, x, y)) return -1;
  if (field[x][y] === 1 && field[x][y + 1] === 1) {
    while (field[x][y + 1] == 1) {
      if (field[x + 1][y] === 1) return -1;
      field[x][y] = 'v';
      counter++;
      y++;
      type = 1;
    }
    if (!checkDiagonal(field, x, y)) return -1;
    field[x][y] = 'v';
    y -= counter - 1;
  } else if (field[x][y] === 1 && field[x + 1][y] === 1) {
    while (field[x + 1][y] == 1) {
      if (field[x][y + 1] == 1 || !checkDiagonal(field, x, y)) return -1;
      field[x][y] = 'v';
      counter++;
      x++;
    }
    if (!checkDiagonal(field, x, y)) return -1;
    field[x][y] = 'v';
    x -= counter - 1;
  }

  return counter > 4 ? -1 : counter;
}

function validateBattlefield(field) {
  // write your magic here
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      const check = checkTools();
      if (!check) return false;
      if (field[i][j] == 1) {
        let type = checkIdentity(field, [i, j]);
        if (type === -1) return false;
        tools[tools.length - type]++;
      }
    }
  }
  return checkToolsFinal();
}

const field1 = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const field2 = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(validateBattlefield(field2));

//left to do: check slant line and make it false;אלכסון
