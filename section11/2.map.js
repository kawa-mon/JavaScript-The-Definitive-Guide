/**
 * 11.1.2 Map
 * Map は他の値に関連付けられた値の集合配列と同じ値の集合。
 * Map()コンストラクタの引数は、反復可能なオブジェクトであれば使えるが、
 * [key, value] という2つの要素を持つ配列が生成されるようにする。
 */
let m = new Map([
  ['one', 1],
  ['two', 2],
])
console.log(m)

let n = { x: 1, y: 2 }
let o = new Map(Object.entries(n))
console.log(o)

// 指定したキーに関連付けられたバリューは、get() を使って読み出せる。
// また、set() を使って新たなキー/バリューのペアを追加できる。ただし、すでに存在するキーを渡すと上書きする。
// その他、Set 同様に size, has(), delete(), clear() が使える。
let p = new Map()
console.log(p.size)
p.set('one', 1)
p.set('two', 2)
console.log(p.size)
console.log(p.get('two'))
console.log(p.get('three'))
p.set('one', true)
console.log(p.size)
console.log(p.has('one'))
console.log(p.has(true))
p.delete('one')
console.log(p.size)
p.delete('three') // 失敗するが、サイズが減らないだけ。
console.log(p.size)
p.clear()
console.log(p.size)

// Map クラスは反復可能なので、for/ofループで巡回可能
let q = new Map([
  ['x', 1],
  ['y', 2],
])
for (let [k, v] of q) {
  console.log(`key: ${k}, value: ${v}`)
}

// スプレッド演算子で展開することで、キーだけ・バリューだけ・キー/バリューのペアで取り出せる
console.log([...m.keys()])
console.log([...m.values()])
console.log([...m.entries()])
