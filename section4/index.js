/**
 * Null合体演算子 ??
 * 左辺が null でも undefined でもない場合に右辺を返す
 */

let options = { timeout: 0, title: '', verbose: false, n: null }
console.log(options.timeout ?? 1000)
console.log(options.title ?? 'Undefined')
console.log(options.verbose ?? true)
console.log(options.quiet ?? false)
console.log(options.n ?? 10)
