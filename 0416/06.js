let res1 = [1, 2, 3, 4, 5].map(function(i) { return i + 1 })
                          .filter(function(i) { return 1 % 2 === 0 })
                          .reduce(function(accu, i) { return accu + i }, 0)

let res2 = 
  [1, 2, 3, 4, 5].map(i => i + 1)
                 .filter(i => i % 2 === 0)
                 .reduce((accu, i) => accu + i , 0)
//console.log(res1)

// let foo = function(i) { return i + i }
// let foo = (i) => { return i + i }
// let foo = i =>  i + i 

let x7 = [1, 2, 3, 4].reduce(
    function(accu, i) { return accu + i },
    0    
)


let obj = [1, 2, 3, 4, 5].reduce((accu, i) =>{    
    accu[`x${i}`] = i + 1    
    console.log(accu[`x${i}`])
    return accu
}, {})

console.log(obj)
