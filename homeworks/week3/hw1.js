
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

function solve(input) {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i += 1) {
    console.log('*'.repeat(i));
  }
}
