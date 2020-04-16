console.log(x); //hoisting: js 會把 var 宣告踢到最上方先執行完，故 x 已被宣告但尚未被賦值

var x = 100; 


console.log(y); //會噴錯誤

let y = 100; 


foo()

//具名函式會 hoisting
function  foo() {
    console.log('aaaaa')
}
//匿名函式不會  hoisting
var bar = function() {
    console.log('brrrrrrrr')
}