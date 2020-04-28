/*
 todo: 
   點下 click 後 替按鈕新增 is-active 樣式
*/
let testBtn = document.querySelector("#btn");
testBtn.addEventListener("click", () => {
  this.classList.toggle("is-active")
})