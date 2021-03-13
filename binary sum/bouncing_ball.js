function bouncingBall(h, bounce, window) {
  if (h < 0 || !(bounce < 1 && bounce > 0) || window >= h) return -1;
  return h * bounce <= window
    ? 1
    : 2 * Math.floor(Math.log(window / h) / Math.log(bounce)) + 1;
}
console.log(bouncingBall(3.0, 0.66, 1.5));

/* 
completely proud of myself :)
*/
