// 正規表現
/**
 * サブパターン
 * () で囲まれた箇所はグループにマッチする文字が記憶され、後続で \1, \2 ・・・の形式で再利用可能。
 * グループにマッチする文字が記憶したくないときは (?:) で囲む。
 */
const r1 = /[Jj]ava(?:[Ss]cript?)\sis\s(fun)\1/g
console.log('JavaScript is fun'.match(r1))
console.log('JavaScript is funfun'.match(r1))

/**
 * 名前付きキャプチャグループ
 * ES2018から導入。上記を数字のインクリメントではなく任意の名称を振れる。
 * (?<xxx>) の形式。
 * 以下はアメリカの郵送住所を表す正規表現。
 */
const r2 = /(?<city>\w+) (?<state>[A-Z]{2}) (?<zipcode>\d{5})(?<zip9>-\d{4})?/g
console.log('aaa AA 12345-1234'.match(r2))

/**
 * 先読み言明（Lookahead assertion）
 * x(?=y)
 * x に y が続く場合のみ x にマッチ
 */
const r3 = /[Jj]ava(?:[Ss]cript)?(?=\:)/g
console.log('JavaScript: THe Definitive Guide'.match(r3))
console.log('Java in a Nutshell'.match(r3))

/**
 * 否定先読み言明（Negative Lookahead assertion）
 * x(?!y)
 * x に y が続かない場合のみ x にマッチします
 */
const r4 = /Java(?!Script)([A-Z]\w*)/g
console.log('JavaBeans'.match(r4))
console.log('Javanese'.match(r4))
console.log('JavaScript'.match(r4))

/**
 * replace()
 * 第1引数：検索文字の正規表現
 * 第2引数：置き換える文字列
 * g フラグがあればマッチした文字列すべてを置き換え、ない場合は最初にマッチした文字列だけ置換
 *
 * NOTE: 正規表現の一部を丸括弧で囲むことで、置換文字列の $x の形式部分を置換できる。名前付きキャプチャも可能。
 */
let quote1 = /"([^"]*)"/g
console.log('He said "stop".'.replace(quote1, '«$1»'))

let quote2 = /"(?<quotedText>[^"]*)"/g
console.log('He said "stop".'.replace(quote2, '«$<quotedText>»'))

/**
 * match()
 * NOTE: String オブジェクトの正規表現メソッドで一番有用
 * g フラグがあればマッチしたすべての文字列を配列で返す。
 */
console.log('7 plus 8 equals 15'.match(/\d+/g))

// g フラグがない場合も配列となる。この場合、1番目の要素はマッチした文字列。
// 2番目以降は、丸括弧で囲まれた正規表現にマッチした文字列が格納される
let url1 = /(\w+):\/\/([\w.]+)\/(\S*)/
let text = 'Visit my blog at http://www.example.com/~david'
let match1 = text.match(url1)
let fullUrl1, protocol1, host1, path1
if (match1 !== null) {
  fullUrl1 = match1[0]
  protocol1 = match1[1]
  host1 = match1[2]
  path1 = match1[3]
}
console.log(fullUrl1, protocol1, host1, path1)

// g フラグがない場合にmatch() メソッドが返す配列にはいくつかのプロパティがある。
// input： match() が呼び出された文字列
// index: マッチした箇所の始点
// groups: 名前付きキャプチャと同じ名前のプロパティ
let url2 = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/
let match2 = text.match(url2)
console.log(match2)
console.log(match2.groups.protocol)
