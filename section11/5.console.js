// console API
/**
 * table()
 * 配列または配列のオブジェクトを持つ。
 * 配列のオブジェクトの場合、第2引数を指定することで、表示を制限できる。
 */
console.table([1, 2, 3])
console.table([{ x: 1, y: 2, z: 3 }])
console.table([{ x: 1, y: 2, z: 3 }], ['x'])
