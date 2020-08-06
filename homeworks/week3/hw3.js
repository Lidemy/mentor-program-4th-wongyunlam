
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  /* eslint-disable-next-line */
  solve(lines);
});

function isPrime(n) {
  // 一行的時候可以偷省略括號，雖然我不知道 eslint 會不會給過就是了XD
  if (n === 1) return false;
  // 找根號以內的數就好，這是數學小知識
  // 先把開根號的值存好，否則每一圈迴圈都會運算一次
  const num = Math.sqrt(n);
  for (let i = 2; i <= num; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solve(input) {
  for (let i = 1; i < input.length; i++) {
    console.log(isPrime(Number(input[i])) ? 'Prime' : 'Composite');
  }
}
