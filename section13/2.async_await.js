/**
 * async / await
 * async な関数の戻り値は必ず Promise になる。
 *
 * 1. Async FunctionはPromise以外の値をreturnした場合、その返り値をもつFulfilledなPromiseを返す
 * 2. Async FunctionがPromiseをreturnした場合、その返り値のPromiseをそのまま返す
 * 3. Async Function内で例外が発生した場合は、そのエラーをもつRejectedなPromiseを返す
 */

// 1. Async FunctionはPromise以外の値をreturnした場合、その返り値をもつFulfilledなPromiseを返す
async function resolveFn() {
  return '値'
}
resolveFn().then((value) => {
  console.log(value)
})

// 2. Async FunctionがPromiseをreturnした場合、その返り値のPromiseをそのまま返す
async function resolveFn2() {
  return Promise.resolve('Promise値')
}
resolveFn2().then((value) => {
  console.log(value)
})

// 3. Async Function内で例外が発生した場合は、そのエラーをもつRejectedなPromiseを返す
async function exceptionFn() {
  throw new Error('例外が発生しました')
}

exceptionFn().catch((error) => {
  console.log(error.message)
})

/**
 * async は以下のシンタックスシュガー
 */
async function f1(x) {
  console.log(x)
}

function f2(x) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(
        (function (x) {
          console.log(x)
        })(x)
      )
    } catch (e) {
      reject(e)
    }
  })
}

f1('async')
f2('promise')

/**
 * await
 * await キーワードは async キーワードがついた関数の中でしか使えない。
 * await キーワードは Promise を受け取って、それを通常の値または例外に変換する。
 * await キーワードは同期処理のように書けるが、実際は非同期処理。なので await を使う関数それ自体も非同期な関数じゃないといけない。
 */
async function asyncMain() {
  const value = await Promise.resolve(42)
  console.log(value)
}
asyncMain()

// これは以下のシンタックスシュガー
function asyncMain2() {
  return Promise.resolve(42).then((value) => {
    console.log(value)
  })
}
asyncMain2()

// 下記 Promise 文もスリムに書ける
// Promise.resolve(2)
//   .then((value) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const v = value * 2
//         console.log('Promise 返す then1', v)
//         resolve(v)
//       }, 3000)
//     })
//   })
//   .then((value) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const v = value * 2
//         console.log('Promise 返す then2', v)
//         resolve(v)
//       }, 1000)
//     })
//   })
async function hoge() {
  function huga(value, message, timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const v = value * 2
        console.log(message, v)
        resolve(v)
      }, timeout)
    })
  }

  const value = await Promise.resolve(2)
  const result1 = await huga(value, 'await1', 3000)
  await huga(result1, 'await2', 1000)
}
hoge()
