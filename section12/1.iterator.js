/**
 * 12.1 イテレータ
 * Iterable なオブジェクトとは、特別な iterator メソッド( Symbol.iterator )を持っているオブジェクトのことで、そのメソッドは iterator オブジェクトを返す。
 * Iterator とは next() メソッドを持っているオブジェクトのことで、そのメソッドは iteration result オブジェクトを返す。
 * Iteration result オブジェクトは value と done というプロパティを持ったオブジェクトのこと。
 *
 * ループするときは iteration result オブジェクトの done が true になるまで処理を続ける。頑張って書くと下記。
 * for (let element of iterable) {
 *   console.log(element)
 * }
 */
let iterable = [1, 2]
let iterator = iterable[Symbol.iterator]()
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value)
}

/**
 * Iterable なオブジェクトを、ジェネレーター関数を使わずに実装。
 * クラスを反復可能にするには、Symbol.iterator という Symbol の名前を持つメソッドを実装する必要がある。
 * このメソッドは、next() メソッドを持つイテレータオブジェクトを返す必要がある。
 * また、next() メソッドはvalue プロパティと done プロパティを持つ必要がある。
 * イテレータが最後まで反復しないときには return() メソッドが呼ばれる。
 *
 * 複雑になってしまうので、そこでジェネレーターを使うことになる。
 */
class MyIterable {
  [Symbol.iterator]() {
    let next = 0
    let max = 10
    return {
      next() {
        return next <= max ? { value: next++ } : { done: true }
      },
      // iterator を iterable にしておくと便利
      [Symbol.iterator]() {
        return this
      },
      // 後処理用（実際はこのクラスでは不要だけど）
      return() {
        console.log('return() が呼び出された')
        return {}
      },
    }
  }
}

let iterable2 = new MyIterable()
console.log([...iterable2])

console.log('途中終了しない場合１')
for (let x of iterable2) {
  //
}

console.log('途中終了しない場合２')
;[...iterable2]

console.log('途中終了する場合１ break')
for (let x of iterable2) {
  break
}

console.log('途中終了する場合２ return')
;(function () {
  for (let x of iterable2) {
    return
  }
})()

console.log('途中終了する場合３ 例外')
try {
  for (let x of iterable2) {
    throw new Error()
  }
} catch {}

console.log('途中終了する場合４ destructuring assignment')
let [v1, v2] = iterable2
console.log(v1, v2)
