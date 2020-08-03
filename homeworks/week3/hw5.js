/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', () => {
  lines.push(line);
});

function compare(a, b, p) {
  if (a === b) return 'DRAW';
  if (p === '-1') {
    const temp = a;
    a = b;
    b = temp;
  }
  const lengthA = a.length;
  const lengthB = b.length;
  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B';
  }
  return a > b ? 'A' : 'B';
}

function solve(input) {
  const m = Number(input[0]);
  for (let i = 1; i <= m; i += 1) {
    const [a, b, p] = lines[i].split(' ');
    console.log(compare(a, b, p));
  }
}
// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
