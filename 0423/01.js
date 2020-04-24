// indexOf
let res46 = [1, 2, 3, 4, 5].indexOf(1)
// console.log(res46)
let res48 = [1, 2, 3, 4, 5].indexOf(6)
// console.log(res48)

// default parameter
function foo(a, b = 999) {
  console.log(a)
  console.log(b)
}
foo(1, 2)
console.log('--------------------')
foo(3)

// varargs
function bar(...y) {
  console.log(y)
}
console.log('--------------------')
bar(1, 2, 3, 4, 5, 6, 7, 8, 9)
bar()

// JavaScript Object
let obj = {
  a: 100,
  b: true,
  c: 'test',
  d: [],
  e: {},
  f: function() {},
  g: () => {}
}

let posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];
let post = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  }

function toPostHtml(jsn) {
  return `
  <h1>ID: ${jsn.userId}</h1>
  <h3>Title: ${jsn.title}</h3>
  <p>${jsn.body}</p>
  `;
}
// let result = toPostHtml(post);
// console.log(result);
//用join把換行去掉
let result = posts.map(toPostHtml).join('')
console.log(result)


// async 非同步(道)

function expensiveCalc(i) {
  return i + 1
}

// sync 同步(道), blocking 
function bar(i) {
  let a = i + 1
  let b = expensiveCalc(i)
  let c = 100
  return b * 10
}




