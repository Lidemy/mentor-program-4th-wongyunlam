// 拿到所有資料
function solve(lines) {
  // 5 200 => ['5', '200']
  let temp = lines[0].split(' ')
  let n = Number(temp[0])
  let m = Number(temp[1])
  for(let i=n; i<=m; i++) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
}

// 回傳數字幾位數
function digitsCount(n) {
  if (n===0) return 1
  let result = 0
  while(n != 0) {
    n = Math.floor( n / 10)
    result++
  }
  return result
}

function isNarcissistic(n) {
  // 幾位數
  let m = n
  let digits = digitsCount(m)
  let sum = 0
  while (m != 0) {
    let num = m % 10
    // 可改成 Math.pow(num, digits)
    sum += num ** digits
    m = Math.floor(m / 10)
  }
  return sum === n;
}