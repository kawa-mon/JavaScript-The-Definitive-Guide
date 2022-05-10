/**
 * 11.1.1 Set
 * Set は配列と同じ値の集合。配列は違い順序やインデックスは存在しない。
 * また重複は許さない。
 * Set()コンストラクタの引数は、反復可能なオブジェクトであれば使える。
 */
let s = new Set()
let t = new Set([1, s])
let unique = new Set('Mississippi')
console.log(s, t, unique)

// add() や delete(), clear() を使っていつでも要素の増減が可能。
console.log(s.size)
s.add(1)
console.log(s.size)
s.add(true)
console.log(s.size)
s.add([1, 2, 3])
console.log(s.size)
s.delete(1)
console.log(s.size)
s.delete('test') // 失敗するが、サイズが減らないだけ。
console.log(s.size)
s.delete(true)
console.log(s.size)
s.delete([1, 2, 3]) // セットのメンバーがオブジェクトの場合は === と同じ用に比較して削除するため、これではサイズは減らない
console.log(s.size)
s.clear()
console.log(s.size)

// NOTE: セットで最も重要なのは、要素を追加したり削除することではない。
// ある値がセットのメンバーであるかどうかを調べること。has() メソッド。
// 配列の includes よりも高速。
let oneDigitPrimes = new Set([2, 3, 5, 7])
console.log(oneDigitPrimes.has(2))
console.log(oneDigitPrimes.has(3))
console.log(oneDigitPrimes.has(4))
console.log(oneDigitPrimes.has('5'))
console.log(oneDigitPrimes.has(9))
oneDigitPrimes.add(9)
console.log(oneDigitPrimes.has(9))

// Set クラスは反復可能なので、for/ofループで巡回可能
let sum = 0
for (let p of oneDigitPrimes) {
  sum += p
}
console.log(sum)
