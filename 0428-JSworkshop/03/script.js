/*
todo: 
  - 按下 click me 按鈕後，會在 #text-wrap 內貼上一個 Errr 的 div
   `<div id="text-wrap" class="wrap">
  <div class="err"> Errr * 1</div>
</div>` 
  - 其中 Errr * (counter) , counter 每按一次會增加
    所以會變成 
    Errr * 1   
    Errr * 2
    Errr * 3

*/
let count = 2;
let wrap = document.querySelector('#text-wrap')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
  wrap.appendChild(addDiv(count++)) // count++傳出去再++，++count加完再傳出去
}, false)

function addDiv(count){
  let ele = document.createElement('div');
  ele.className = "err"
  ele.innerText = `Errr * ${count}`
  return ele;
}