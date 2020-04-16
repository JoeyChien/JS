for(var i = 0; i < 10; i++){
    //i 是 global 變數
}
console.log(i);


for(let i = 0; i < 5; i++){
    //使用 let 宣告的會變成區域變數
    console.log(i);
}
console.log(i); 