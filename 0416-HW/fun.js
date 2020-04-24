// Pt.1
// 'G' -> 'C' 
// 'C' -> 'G' 
// 'A' -> 'U' 
// 'T' -> 'A' 
// RandomSource.transcript('ACTGCTAGCTAG') 
// Rna.transcript('GC') 

function transcript1(str){
    let arr = str.split('');  
    for(i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'G':
                arr[i] = 'C';
                break;
            case 'C':
                arr[i] = 'G';
                break;
            case 'A':
                arr[i] = 'U';
                break;
            case 'T':
                arr[i] = 'A';
                break;
        }
    }
    return arr.join('');
}
console.log(transcript1('GC'));
console.log(transcript1('ACTGCTAGCTAG'));


// Pt.2 終止值
// UAG UAA UGA 
// Rna.transcript('ACGTATTCCCCC') // => 'UGCAUAA'

function transcript2(str){
    let obj = {
        'C': 'G',
        'G': 'C',
        'A': 'U',
        'T': 'A',
    }

    let result = str.replace(/C|G|A|T/g, function(i) {
        return obj[i]
    })

    let arr = []
    arr = result.replace(/UAG|UAA|UGA/g, function(i) {
        return `${i}/`
    }).split('/')
    return arr[0];
}

console.log(transcript2('ACGTATTCCCCC'));

/* 老師的方法 */
//object的最後也放','代表可能會再新增東西
let dna_map = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A',
}

function translate(c){
    return dnaMap[c]
}

function checkEnder(currentDna) {
    let res = currentDna.split().slice(-3).join('')
    console.log(res)
    return ender.indexOf(res) > 0
}

function alwaysFalse(c) {
    return false
}

let Rna = {
    transcript3: function (dna, checkF = alwaysFalse) {
        return dna.split()
                  .map(translate)
                  .reduce((accu, c) => {
                    return checF(accu) ? accu : accu + c
                 }, '')
    }
}


let expected = "UGCACCAGAAUU"

console.log(translate('A') === 'U')
console.log(Rna.transcript('ACGTGGTCTTAA') === "UGCACCAGAAUU")
console.log(Rna.transcript('ACGTATTCCCCC', hasEnder) === 'UGCAUAA')

// indexOf
let res46 = [1, 2, 3, 4, 5].indexOf(1)
console.log(res46)
let res48 = [1, 2, 3, 4, 5].indexOf(6)
console.log(res48)

// default parameter
function foo(a, b) {
  console.log(a)
  console.log(b)
}
