// 3.2 数値
console.log(-1 / 0)
console.log(0 / 0)
console.log(Infinity / Infinity)
console.log(-1 / Infinity)

let timestamp = Date.now()
let now = new Date()
let ms = now.getTime()
let iso = now.toISOString()
console.log(timestamp, now, ms, iso)

// 3.3 テキスト

console.log('x'.padStart(3, '*'))
console.log('x'.padEnd(3, '*'))
