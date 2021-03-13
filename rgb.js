function rgb(r, g, b) {
  // complete this function
  r = r > 255 ? 255 : r;
  r = r < 0 ? 0 : r;

  g = g > 255 ? 255 : g;
  g = g < 0 ? 0 : g;
  b = b > 255 ? 255 : b;
  b = b < 0 ? 0 : b;
  return (
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0')
  ).toUpperCase();
}
console.log(rgb(0, 255, 255));

function generateHashtag(str) {
  if (str.length === 0 || str.length >= 140) return false;
  return (
    '#' +
    str
      .split(' ')
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join('')
  );
}
console.log(generateHashtag('a'.repeat(140)));
console.log('a'.repeat(140).length);
