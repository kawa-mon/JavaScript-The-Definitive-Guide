/**
 * 配列から重複を削除
 * 配列をセットに格納し、スプレッド演算子で配列に戻す
 */
let letters = [...'hello world']
console.log([...new Set(letters)])

// reduce
let a = [1, 2, 3, 4, 5]
console.log(a.reduce((prev, cur) => prev + cur, 5))

// flatMap 以下2つは同じ
let phrases = ['hello world', 'the definitive guide']
let words1 = phrases.flatMap((phrase) => phrase.split(' '))
console.log(words1)

let words2 = phrases.map((phrase) => phrase.split(' ')).flat()
console.log(words2)
