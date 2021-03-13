//(2 / (2 + 3.33) * 4) - -6

//token is global.
var token = '',
  type = '',
  nextIndex = 0;
var expressionGlobal = '';
function removeWhiteSpaces(str) {
  return str.replace(/\s+/g, '');
}
//parser:
function getToken() {
  token = '';
  let current = expressionGlobal.charAt(nextIndex);
  if (/^\d$/.test(current)) {
    while (
      expressionGlobal.charAt(nextIndex) !== '' &&
      /^\d*\.?\d*$/.test(expressionGlobal.charAt(nextIndex))
    ) {
      current = expressionGlobal.charAt(nextIndex);
      token += current;
      nextIndex++;
    }
    return 'number';
  }
  token = current;
  nextIndex++;

  switch (token) {
    case '(':
      return 'left parenthesis';
    case ')':
      return 'right parenthesis';
    case '-':
      return 'minus';
    case '+':
      return 'plus';
    case '*':
      return 'multiply';
    case '/':
      return 'division';
    default:
      return 'end';
  }
}
//evaluate an expression
function calcExpression() {
  let val;
  let op;
  val = term();
  while (type === 'plus' || type === 'minus') {
    op = type;
    type = getToken();
    if (op === 'plus') val = val + term();
    else val = val - term();
  }
  return val;
}
function term() {
  let val;
  let op;
  val = factor();
  while (type === 'multiply' || type === 'division') {
    op = type;
    type = getToken();
    // do action
    if (op === 'multiply') val = val * factor();
    else val = val / factor();
  }
  return val;
}
function factor() {
  let val;
  if (type === 'number') {
    val = Number(token);
    type = getToken();
    return val;
  } else if (type === 'minus') {
    type = getToken();
    return -factor();
  } else if (type === 'left parenthesis') {
    type = getToken();
    val = calcExpression();
    if (type === 'right parenthesis') {
      type = getToken();
      return val;
    }
  }
}
function resetGlobalParams() {
  token = '';
  type = '';
  nextIndex = 0;
  expressionGlobal = '';
}
var calc = function (expression) {
  resetGlobalParams();
  let res = 0;
  expressionGlobal = removeWhiteSpaces(expression);
  // evaluate `expressionGlobal` and return result
  type = getToken();
  while (token !== '') {
    if (type === 'number' || type === 'left parenthesis' || type === 'minus') {
      res = calcExpression();
    }
  }
  return res;
};

console.log(calc('2 / (2 + 3) * 4.33 - -6'));
console.log(calc('1+1'));
// console.log(calc(1));
