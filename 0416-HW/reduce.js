
// Pt.3 用reduce做map跟filter

let res1 = [1, 2, 3, 4, 5].map(function(i) { return i + 1 })
                          .filter(function(i) { return 1 % 2 === 0 })
                          .reduce(function(accu, i) { return accu + i }, 0)

let reduceMap = [1, 2, 3, 4].reduce(
    function(accu, i) { return accu + i },
    0    
)

// teacher ver

[1, 2, 3].map(x => x + 1) // [2, 3, 4]

myMap([1, 2, 3], x => x + 1) // [2, 3, 4]

myFilter([1, 2, 3], x => x % 2 === 0) // [2]

function myMap(ary, f) {
  ary.reduce((accu, x) => [...accu, f(x)], [])
}

function myFilter(ary, f) {
    return ary.reduce((accu, f) => f(x) ? [...accu, x] : accu, [])
}

