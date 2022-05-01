/**
 * ドットと識別子を使うオブジェクトの書式では、プログラムで識別子を操作出来ないが、
 * []演算子を使う書式では、プログラムで操作できる
 */
let addr = ''
let customer = { address0: 'a', address1: 'b', address2: 'c', address3: 'd' }
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + '\n'
}
console.log(addr)

/**
 * オブジェクトのプロパティの調査
 */

let o1 = { x: 1, y: 2, z: 3 }
o1[Symbol('symbol')] = 'symbol'
console.log(o1)
console.log(Object.keys(o1))
console.log(Object.getOwnPropertyNames(o1))
console.log(Object.getOwnPropertySymbols(o1))
console.log(Reflect.ownKeys(o1))

/**
 * オブジェクトの拡張
 */
// 古い方法
let target = { x: 1 },
  source = { y: 2, z: 3 }
for (let key of Object.keys(source)) {
  target[key] = source[key]
}
console.log(target)

// ES6以降の新しい方法
let newTarget = Object.assign(target, source)
console.log(newTarget)

/**
 * スプレッド演算子
 * 同名プロパティは後勝ち
 */
let o2 = { x: 1 }
let p = { x: 0, ...o2 }
console.log(p)

let q = { ...o2, x: 2 }
console.log(q)

// 継承プロパティは展開しない
let o3 = Object.create({ x: 1 })
let p2 = { ...o3 }
console.log(o3, p2)

/**
 * メソッドの簡略記法 以下2つは同じ意味
 */
let square1 = {
  area: function () {
    return this.side * this.side
  },
  side: 10,
}
console.log(square1.area())

let square2 = {
  area() {
    return this.side * this.side
  },
  side: 10,
}
console.log(square2.area())

/**
 * ゲッター・セッター
 */
const serialNum = {
  _n: 0,
  get next() {
    return this._n++
  },
  set next(n) {
    if (n > this._n) {
      this._n = n
    } else {
      throw new Error('serial number can only be set tot a larget value')
    }
  },
}
serialNum.next = 10
console.log(serialNum.next)
console.log(serialNum.next)
serialNum.next = 5
