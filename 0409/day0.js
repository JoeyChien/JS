let a = 10;
let b = 20;
let result = a + b;

let a5 = '10';
let b6 = 20;
let result7 = a5 + b6;
// console.log(result7);
// 印出的是字串

let ary = [1, 2, 3, 4, 5]
//console.log(typeof ary);
// js都只會是物件


for(var i = 0; i < 10 ; i++){

}
// console.log(i);

// js習慣用camelClass命名法
let myAwesomeVariable = 10;

function maxNum(ary) {
    console.log(Math.max(...ary))
}

arry = [1,2,3,4,44,12,90,5,6,7,8,8,64]
//maxNum(arry)

function add(x,y) {
    return x + y
}

let addresult = add(5,1000)
//console.log(addresult)

function sayHello(name,num) {
    //return "Hello, " + name + ", I receive " + name 
    return `Hello, ${name}  I receive ${num} `
}

let str = sayHello("Joey",40 )
//console.log(str)

//if...else 沒包括號的話if只接受下一行
// let a47 = 10
// if (a47 > 20)
//     console.log('lala')
//     console.log('hoooo')

// let a52 = 10
// if (a52 > 20) {
//     console.log('lala')
//     console.log('hoooo')
// }

function calculate(cartAmount) {
    let discount = 1
    if (cartAmount >= 1000){
        discount = 0.8
    }
    else if (cartAmount >= 100){
        discount = 0.85
    }else {
        discount = 0.9
    }
    return cartAmount * discount
}

console.log(calculate(50))