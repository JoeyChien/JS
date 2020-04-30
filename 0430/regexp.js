let res1 = "regexp".match(/regex/);
//console.log(res1);

let res4 = /"regexp"/.exec("regexp");
//console.log(res4);

//四個英文字加兩個驚嘆號
let res7 = "sadfdy!!!".match(/\w\w\w\w!!/)
//console.log(res8);

let res11 = "aaaaaaaaaaaaabcde".match(/\w{3,5}e/)
//console.log(res11);

let inputs = ["A123456789", "123443689A", "ASEEBUDPI4", "QA123456789E"]

for(i of inputs){
  let res = /^[A-Z]\d{9}$/.exec(i)
  //console.log(i, res);
}


let tels = ["02-2882-5252", "28825252", "02-28825252", "0228825252"]

for(let s of tels){
  let res = /(?:\d\d-?)?(\d{4}-?\d{4})$/.exec(s)
  //console.log(res);
}

let exts = ["foo.rb", "bar.js", "foobarb.py", "js.rb.py"]
for(let s of exts){
  let fileRex = /(\w+\.(rb|js))$/
  //console.log(fileRex.exec(s));
}

let brds = [
  "the oo design",
  "oodesign",
  "moon"
]

for(let s of brds){
  let rex = /\boo\b/
  console.log(rex.exec(s));
}