
// Pt.3 用reduce做map跟filter

let res1 = [1, 2, 3, 4, 5].map(function(i) { return i + 1 })
                          .filter(function(i) { return 1 % 2 === 0 })
                          .reduce(function(accu, i) { return accu + i }, 0)

let reduceMap = [1, 2, 3, 4].reduce(
    function(accu, i) { return accu + i },
    0    
)

