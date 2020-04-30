/*
 todo: 
   點下 click 後 替按鈕新增 is-active 樣式
*/
let testBtn = document.querySelector(".btn");
testBtn.addEventListener("click", function(e){
  console.log(e.target) //最開始發起事件的那位
  console.log(e.currentTarget) //正在事件的那位，有可能過捕捉或冒泡觸發 = 
  console.log(this)
  testBtn.classList.toggle("is-active");
}, false)