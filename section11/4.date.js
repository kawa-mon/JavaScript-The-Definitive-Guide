// 日付と時刻
// NOTE: 1年の最初の月は0になるが、月の最初の日は1になる
let century = new Date(2100, 0, 1, 2, 3, 4, 5)
console.log(century.toString())

console.log(century.toUTCString())
console.log(century.toISOString())
console.log(century.toLocaleString())
console.log(century.toLocaleDateString())
console.log(century.toLocaleTimeString())
console.log(century.toDateString())
console.log(century.toTimeString())
