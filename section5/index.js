/**
 * for/of 反復可能なオブジェクト ES6 から導入
 */
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum = 0
for (let element of data) {
  sum += element
}
console.log(sum)

let o = { x: 1, y: 2, z: 3 }
let keys = ''
for (let k of Object.keys(o)) {
  keys += k
}
console.log(keys)

let values = 0
for (let v of Object.values(o)) {
  values += v
}
console.log(values)

let pairs = ''
for (let [k, v] of Object.entries(o)) {
  pairs += k + v
}
console.log(pairs)

// ES6では文字列も反復可能
let frequency = {}
for (let letter of 'mississippi') {
  if (frequency[letter]) {
    frequency[letter]++
  } else {
    frequency[letter] = 1
  }
}
console.log(frequency)

// Set も反復可能
let text = 'Na na na na na na na na na Batman!'
let wordSet = new Set(text.split(' '))
let unique = []
for (let word of wordSet) {
  unique.push(word)
}
console.log(unique)

// Map はキーと値のペアに対して反復処理
let m = new Map([[1, 'one']])
for (let [key, value] of m) {
  console.log(key, value)
}
