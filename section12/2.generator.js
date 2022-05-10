/**
 * ジェネレーター関数は function* とアスタリスクをつけて定義する。
 * ジェネレーター関数を呼び出すと、実際にはその関数本体は実行されずに、ジェネレーターオブジェクトが返される。
 * このジェネレーターオブジェクトは iterable になっている。
 * next() を呼び出すとジェネレーター関数が最初の yield 文まで実行される。
 * yield は ES6 で導入されたもの。
 * この yield 文の値が next() の戻り値になる。
 */
function* oneDigitPrimes() {
  yield 2
  yield 3
  yield 5
  yield 7
}

let primes = oneDigitPrimes()
console.log(primes)
console.log(primes.next())
console.log(primes.next())
console.log(primes.next())
console.log(primes.next())

// さらにジェネレーターはそれ自身が Iterable で自分自身を返す
console.log(primes === primes[Symbol.iterator]())

// なのでジェネレーター自体を Iterable なオブジェクトとして扱うことができる
console.log([...oneDigitPrimes()])

// 1.iterator.js の class MyIterable は下記に簡略化できる
class MyIterable {
  *[Symbol.iterator]() {
    for (let i = 0; i <= 10; i++) {
      yield i
    }
  }
}

let iterable = new MyIterable()
console.log([...iterable])

/**
 * return を書くと、そこで処理が終わるので、途中で処理を終わらせたい場合に使用する。
 * return に値を指定すると done が true なのに value にも値が指定されている状態になる。この値は for/of やスプレッド演算子では無視される。
 */
function* myGenerator() {
  yield 1
  yield 2
  return 3
}

let g = myGenerator()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

// return の value は無視される
console.log([...myGenerator()])

/**
 * ジェネレーターには return() メソッドが定義されている
 * ジェネレーターに対して独自の return() を実装することはできない。
 * クリーンアップをしたい場合は try/finally を使う。
 * return() を呼び出すと、ジェネレーターはクリーンアップのコードを実行する。
 */
function* myGenerator() {
  try {
    console.log('1の前')
    yield 1
    console.log('2の前')
    yield 2
    console.log('3の前')
    yield 3
    console.log('3のあと')
  } finally {
    console.log('finallyが呼ばれたー')
  }
}

console.log('return() を直接呼び出し =======')
let g2 = myGenerator()
g2.next()
g2.next()
g2.return()

console.log('destructuring assignment =======')
let [v1] = myGenerator()

console.log('for/ofをbreak =======')
for (let v of myGenerator()) {
  break
}
