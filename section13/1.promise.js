/**
 * Promise
 * callback だとネストが深くなる→ Promise だとリニアに書ける
 * callback だとエラーハンドリングが難しい→ Promise だとエラー処理の方法が標準化されてる
 *
 * Promiseを返す関数や、Promiseの結果を使う関数には、名前に動詞をつけることが一般的。
 * then と相まって英語の文のように読める
 * getJSON('api/user/profile').then(displayUserProfile).catch(handleProfileError)
 */

/**
 * 基本形
 * promiseオブジェクトがresolveもしくはrejectされた時の処理を then() メソッド内部に記述する。
 * fetch関数 内でpromiseオブジェクトがresolveされると、値と共に then() の第一引数に指定した関数が呼ばれる。
 * rejectされる場合は then() の第二引数に指定した関数が呼ばれる。
 *
 * なお、promiseオブジェクトの状態は、一度PendingからFulfilledやRejectedになると、 そのpromiseオブジェクトの状態はそれ以降変化することはない。
 * つまり、PromiseはEvent等とは違い、then() で登録した関数が呼ばれるのは1回限り。
 */
Promise.resolve()
  .then(function onFulfilled(_value) {
    console.log('fulfilled')
  })
  .catch(function onRejected(_error) {
    console.error('rejected')
  })

/**
 * then の戻り値について
 * then() メソッドにコールバック関数を渡すとき、新たな Promise(p1) オブジェクトを返す。
 * この Promise は then() に渡した処理が終わると fulfilled になる。
 * then() に渡す処理2パターンに応じて挙動が変わる。
 *
 * 1. then() に渡すコールバック関数が Promise 以外の値を返すとき
 *   then() の返した Promise はコールバック関数の戻り値がその値となって、fulfilled になる。
 * 2. then() に渡したコールバック関数が Promise(p2) を返すとき
 *   then() の返した Promise(p1) は resolved にはなるが fulfilled にはならない。
 *   P2 が fulfilled になると、p2 と同じ値で p1 も fulfilled になる。
 *   p2 が rejected になると、p2 と同じ値で p1 も rejected になる。
 * @see https://ja.javascript.info/promise-chaining#ref-188
 */
// 1. then() に渡すコールバック関数が Promise 以外の値を返すとき
Promise.resolve(2)
  .then((resolve) => {
    setTimeout(() => {
      console.log('Promise 返さない then1：', resolve * 2)
    }, 2000)
  })
  .then((resolve) => {
    setTimeout(() => {
      console.log('Promise 返さない then2：', resolve * 2)
    }, 1000)
  })

// 2. then() に渡したコールバック関数が Promise(p2) を返すとき
Promise.resolve(2)
  .then((value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const v = value * 2
        console.log('Promise 返す then1', v)
        resolve(v)
      }, 3000)
    })
  })
  .then((value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const v = value * 2
        console.log('Promise 返す then2', v)
        resolve(v)
      }, 1000)
    })
  })

/**
 * then() の第二引数でエラーハンドリングするのは一般的ではない。
 * catch() でエラーハンドリングするのが慣習。
 * 以下2つは同等。シンタックスシュガー。
 * p.then(null,c)
 * p.catch(c)
 */
Promise.resolve('hoge')
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.error(error)
  })
