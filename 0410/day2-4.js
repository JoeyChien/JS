/*Object*/

let studentA = {
    name: 'Won',
    age: 18,
    gender: 'M',
    merried: false
}
//找某個物件的某的屬性
console.log(studentA.name)
//取出所有的key
console.log(Object.keys(studentA))
//取出所有內容，轉成arry of arry
let entrs = Object.entries(studentA)
console.log(entrs)
let entriesWithoutMerried = []
for(let pair of entrs) {
    
}

function getAreaCode(country){
    let areaCode = {
        'us': '01',
        'tw': '886',
        'hk': '86'
    }
    return areaCode[country]
}
//查表用
console.log(getAreaCode('tw'))
