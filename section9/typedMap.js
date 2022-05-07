// 9.5 サブクラス
class TypedMap extends Map {
  constructor(keyType, valueType, entries) {
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`)
        }
      }
    }

    super(entries)

    this.keyType = keyType
    this.valueType = valueType

    console.log(new.target.name)
    console.log(new.target)
  }

  set(key, value) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`)
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`)
    }
    return super.set(key, value)
  }
}

const tm = new TypedMap('string', 'number', [['a', 1]])
tm.set('b', 2)
console.log(tm)
