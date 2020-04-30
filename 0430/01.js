function Car(brand, model) {
  this.brand = brand
  this.model = model
}

let c = new Car('benz', 'c300')
Car.prototype.print = function() {
  console.log(`${this.brand}: ${this.model}`)
}
Car.prototype.wheels = 4
let d = new Car('toyota','Rav4')
c.print()
d.print()

class Bus extends Car{

}
console.log(Car.prototype)
console.log(Bus.prototype)

var students = [
  {name: "John Doe", age: 24},
  {name: "Mary Lee", age: 17},
  {name: "Bill Doe",  age: 2},
  {name: "Ash Lee",  age: 38},
  {name: "Ryu Doe",  age: 18},
]

let result = students.filter(s => s.age >= 18)
                     .map(s => s.name.split(' '))
                     .map(([fn, ln]) => ln)
                     .reduce((accu, i) => {
                      if(Object.keys(accu).indexOf(i) < 0){
                          return {...accu, i: 1}
                        }
                     },{})
console.log(result)

function Sum(ary) {
  if(ary.length === 0) { return accu }
  let [head, ...tails] = ary
  return head + Sum(tails) //會等sum再回傳，佔記憶體
}

let res45 = sum()

//尾呼叫最佳化
function tailSum(ary, accu = 1) {
  if(ary.length === 0) { return accu }
  let [head, ...tails] = ary
  return tailSum(tails, accu + head) //直接給值，不用再等回傳
}