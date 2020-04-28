// todo: 
//   當按下 submit 以後，請取得 form 表單內的值並且包裝成一個 object
//   {
//     userName: 'userName',
//     email: 'youremail@email.com',
//     password: 'your password',
//     agree: true
//   }
//   並且使用 console.log 印出結果

let myObject = new Object()

let myForm = document.forms["myForm"]
myForm.addEventListener('submit', function(e){
  e.preventDefault();
  myObject.agree = this.querySelector('input[name="agree"]').checked
  myObject.password = this.querySelector('input[name="password"]').value
  myObject.email = this.querySelector('input[name="email"]').value
  myObject.userName = this.querySelector('input[name="userName"]').value  
  console.log(myObject)
})