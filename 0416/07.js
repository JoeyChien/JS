
function foo(x) {
    return function(y) {
      return function(z) {
        return x + y + z
      }
    }
  }
  
  // let result15 = foo(1)
  // console.log(result15)
  // let result16 = result15(2)
  // console.log(result16)
  // let result17 = result16(3)
  // console.log(result17)
  let result21 = foo(1)(2)(3)

  let foo = x => y => z => x + y + z