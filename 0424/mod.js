(function() {
  let fun1 = () => {}
  let fun2 = () => {}
  let var1 = 1
  let privVar = 100

  return {fun1, fun2, var1}
})()

let mod = require('mod.js')