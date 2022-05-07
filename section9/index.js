// 9.2 クラスとコンストラクタ
;(function () {
  function Range(from, to) {
    this.from = from
    this.to = to
  }

  Range.prototype = {
    includes: function (x) {
      return this.from <= x && x <= this.to
    },
    [Symbol.iterator]: function* () {
      for (let x = Math.ceil(this.from); x <= this.to; x++) yield x
    },
    toString: function () {
      return `(${this.from}...${this.to})`
    },
    constructor: Range,
  }

  let r = new Range(1, 3)
  console.log(r)
  console.log(r.includes(2))
  console.log(r.toString())
  console.log(...r)
  console.log(r.constructor)
  console.log(r instanceof Range)
})()

// 9.3 class キーワードによるクラス
// 上記の書き直し
;(function () {
  class Range {
    constructor(from, to) {
      this.from = from
      this.to = to
    }

    includes(x) {
      return this.from <= x && x <= this.to
    }
    *[Symbol.iterator]() {
      for (let x = Math.ceil(this.from); x <= this.to; x++) yield x
    }
    toString() {
      return `(${this.from}...${this.to})`
    }
  }

  let r = new Range(1, 3)
  console.log(r)
  console.log(r.includes(2))
  console.log(r.toString())
  console.log(...r)
  console.log(r.constructor)
  console.log(r instanceof Range)
})()

// 例：複素数クラス
;(function () {
  class Complex {
    constructor(real, imaginary) {
      this.r = real
      this.i = imaginary
    }

    plus(that) {
      return new Complex(this.r + that.r, this.i + that.i)
    }
    times(that) {
      return new Complex(
        this.r * that.r - this.i * that.i,
        this.r * that.i + this.i * that.r
      )
    }
    toString() {
      return `${this.r},${this.i}`
    }
    equals(that) {
      return that instanceof Complex && this.r === that.r && this.i === that.i
    }

    static sum(c, d) {
      return c.plus(d)
    }
    static product(c, d) {
      return c.times(d)
    }

    get real() {
      return this.r
    }
    get imaginary() {
      return this.i
    }
    get magnitude() {
      return Math.hypot(this.r, this.i)
    }

    static ZERO = new Complex(0, 0)
    static ONE = new Complex(1, 0)
    static I = new Complex(0, 1)
  }

  let c = new Complex(2, 3)
  let d = new Complex(c.i, c.r)
  console.log(c.plus(d).toString())
  console.log(c.magnitude)
  console.log(Complex.product(c, d))
  console.log(Complex.ZERO.toString())

  // 既存のクラスにメソッドを追加する
  Complex.prototype.conj = function () {
    return new Complex(this.r, -this.i)
  }
  console.log(c)
  console.log(c.conj())
})()
