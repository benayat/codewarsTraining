function numberArrange(numberObject, first = false, last = false) {
  let prefix = '';
  let key = Object.keys(numberObject)[0];
  let number = Object.values(numberObject)[0];
  if (last && number !== 0) {
    prefix = ' and ';
  } else if (number >= 1) {
    prefix = ', ';
  }
  if (number > 1) {
    number = number + ' ' + key;
  } else if (number == 1) {
    number = number + ' ' + key.slice(0, -1);
  } else {
    number = '';
  }
  return !first ? prefix + number : number;
}

function formatDuration(seconds) {
  // Complete this function
  if (seconds === 0) return 'now';
  let secondCount = seconds % 60;
  secondCount =
    secondCount > 1
      ? ' and ' + secondCount + ' seconds'
      : secondCount === 1
      ? ' and ' + secondCount + ' second'
      : '';
  let yearsCount = Math.floor(seconds / (3600 * 24 * 365));
  let daysCount = Math.floor((seconds % (3600 * 24 * 365)) / (3600 * 24));
  let hourCount = Math.floor((seconds % (3600 * 24)) / 3600);
  let minutesCount = Math.floor((seconds % 3600) / 60);

  return (
    numberArrange({ years: yearsCount }, true) +
    numberArrange(
      { days: daysCount },
      yearsCount === 0 ? true : false,
      hourCount === 0 && minutesCount === 0 && secondCount === '' ? true : false
    ) +
    numberArrange(
      { hours: hourCount },
      yearsCount === 0 && daysCount === 0 ? true : false,
      minutesCount === 0 && secondCount === '' ? true : false
    ) +
    numberArrange(
      { minutes: minutesCount },
      yearsCount === 0 && daysCount === 0 && hourCount === 0 ? true : false,
      secondCount === '' ? true : false
    ) +
    (yearsCount === 0 &&
    daysCount === 0 &&
    hourCount === 0 &&
    minutesCount === 0
      ? secondCount.slice(5)
      : secondCount)
  );
}
console.log(formatDuration(3600));

// years: 126144000
// days:
