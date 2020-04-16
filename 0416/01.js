var a = 1;
console.log(a);

function foo(){
    var b = 2;
    console.log(b);
}

foo(); //造成高偶合的狀況，因為fun依賴環境中的變數，低耦合的程式較好改動


var x = 1;
function foo2(){
    var x = 2;
    console.log(x); //被 shadowing，吃到內部的 x
}
console.log(x); //吃外部 x

function bar() {
    x20 = 99 //未用var
}
bar() //未被var的變數被執行後會被變成global變數
console.log(x23)