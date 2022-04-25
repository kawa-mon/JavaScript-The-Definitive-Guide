// 関数呼び出しのスプレッド演算子
function timed(f) {
  return function (...args) {
    console.log(`Entering function ${f.name}`)
    let startTime = Date.now()
    try {
      return f(...args)
    } finally {
      console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`)
    }
  }
}

function benchmark(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) sum += i
  return sum
}

timed(benchmark)(100000)

/**
 * クロージャー
 */
// まずはクロージャーではない例。入れ子型関数。
let scope = 'global scope'
function checkScope1() {
  let scope = 'local scope'
  function f() {
    return scope
  }
  return f()
}
console.log(checkScope1())

// クロージャー
function checkScope2() {
  let scope = 'local scope'
  function f() {
    return scope
  }
  return f
}
let s = checkScope2()()
console.log(s)

/**
 * bind
 * 第1引数は this の値にバインド。
 * 第2引数以降は関数の引数にバインド。部分適用といい、カリー化とも呼ぶ
 */
function f(y) {
  return this.x + y
}
let o = { x: 1 }
let g = f.bind(o)
console.log(g(2))
let p = { x: 10, g }
console.log(p.g(2))

// カリー化
let sum = (x, y) => x + y
let successor = sum.bind(null, 1)
console.log(successor(2))

function l(y, z) {
  return this.x + y + z
}
let m = l.bind({ x: 1 }, 2)
console.log(m(3))

/**
 * 関数型プログラミング
 * 1. 関数による配列の処理（ある配列の平均や標準偏差）
 */
// 非関数型
;(function () {
  let data = [1, 1, 3, 5, 5]
  let total = 0
  for (let i = 0; i < data.length; i++) total += data[i]
  let mean = total / data.length
  console.log('平均', mean)

  total = 0
  for (let i = 0; i < data.length; i++) {
    let deviation = data[i] - mean
    total += deviation * deviation
  }
  let stddev = Math.sqrt(total / (data.length - 1))
  console.log('標準偏差', stddev)
})()

// mapとreduceを使って関数型プログラミングのスタイルにする
;(function () {
  const sum = (x, y) => x + y
  const square = (x) => x * x

  let data = [1, 1, 3, 5, 5]
  let mean = data.reduce(sum) / data.length
  let deviations = data.map((x) => x - mean)
  let stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1))
  console.log('平均', mean)
  console.log('標準偏差', stddev)
})()

// mapとreduceの関数型バージョンを利用
;(function () {
  const sum = (x, y) => x + y
  const square = (x) => x * x
  const map = function (a, ...args) {
    return a.map(...args)
  }
  const reduce = function (a, ...args) {
    return a.reduce(...args)
  }

  let data = [1, 1, 3, 5, 5]
  let mean = reduce(data, sum) / data.length
  let deviations = map(data, (x) => x - mean)
  let stddev = Math.sqrt(
    reduce(map(deviations, square), sum) / (data.length - 1)
  )
  console.log('平均', mean)
  console.log('標準偏差', stddev)
})()

/**
 * 2. 高階関数（引数として関数を受け取り、新たな関数を返す）
 */
;(function () {
  function not(f) {
    return function (...args) {
      let result = f.apply(this, args)
      return !result
    }
  }

  const even = (x) => x % 2 === 0
  const odd = not(even)
  console.log([1, 1, 3, 5, 5].every(odd))
})()
