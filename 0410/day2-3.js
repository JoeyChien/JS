let fruits = ['apple','banna','cherry','berry','melon']

for (let i = 0; i< fruits.length; i++){
    console.log(`I love ${fruits[i]}`)
}

console.log('=====')

let langs = ['JS','Ruby','Elixir','Haskell']

for (let lang of langs) {
    console.log(`I got ${lang}`)
}

console.log('=====')

let fruits2 = ['apple','banna','cherry','berry','melon']

function getSomething1(begin,count){
    for (let i = begin - 1 ; i <= count ; i++){
        console.log(`I love ${fruits2[i]}`)
    }
}
getSomething1(2,3)

console.log('=====')

function printSomeItems(items){
    items = items.slice(1,4)
    for (let i of items) {
        console.log(`I love ${i}`)
    }
}
printSomeItems(fruits2)
