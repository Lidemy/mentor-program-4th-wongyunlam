const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
});

function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  return (reverseStr === str);
}

function solve(input) {
  const str = input[0];
  console.log((isPalindrome(str)) ? 'True' : 'False');
}

rl.on('close', () => {
  solve(lines);
});
