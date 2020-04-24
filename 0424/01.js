/* This!!! */
console.log(this)

//ley a = 999
let obj = {
  a: 100,
  b: function(x) {
    // this是obj
    return x + this.a
  },
  c: x => {
    //鍵號函式的this是obj外面的
    return x + this.a
  }
}

let f = obj.b

console.log(obj.b(10))
console.log(f(10))

console.log(module.exports)

let foo = {a: 2}
let bar = {a: 5}


console.log(f.call(foo, 10))
console.log(f.apply(bar, [10, 20]))

// 鍵號函式想要回一個物件要用小括號包起來
let fo = (a) => ({a: a, b: b})

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
/* destructive assignment */
let ary = [1, 2, 3, 4, 5, 6]
let oj = {a: 1, b: 2, c: 3, d: 4}

// let firsEl = ary[0]
// let secEl = ary[1]
// let thirdEl = ary[2]

// 一次指派三個
let [firstEl, secEl, thirdEl] = ary
console.log(firstEl)
console.log(secEl)
console.log(thirdEl)
let [head, ...tails] = ary

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
let oj = {a: 1, b: 2, c: 3, d: 4}
//let {a: somA, b: somB, d: somD} = oj
// 變數名稱跟key一樣就可以直接省略
let {a, b, d, c: comeC} = oj
console.log(d)


// person :: {name: '', age: 10}
function printInfo({name, age}) {
  console.log(`Person: ${name} is ${age} years old`)
}

printInfo({name: 'John', age: 30, gender: 'M'})

let classroom = {
  teacher: {name: 'john', age: 30}
}

let {teacher: {name}} = classroom

/* default parameter */
function getY() { return undefined; }
function hasDefault(x, y = 100) {
  y = y || 100
  return x + y
}

let res83 = hasDefault(10, getY())
console.log(res83)

/* spread */
let ary88 = [1, 2, 3]
ary88.push(4)
console.log(ary88)

let ary91 = [0, ...ary88, 5]
console.log(ary91)


// ...把陣列ㄉ外殼炸開
let person = {name: 'j', age: 10}
let prn = {...person, gender: 'M'}
console.log(prn)





// IIFE
let obj102 = (function() {
  return { a: 'dont modify', b: 'else' }
})()

