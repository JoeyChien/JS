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
        'T': 'A'
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


// Pt.3 用reduce做map跟filter

// let res1 = [1, 2, 3, 4, 5].map(function(i) { return i + 1 })
//                           .filter(function(i) { return 1 % 2 === 0 })
//                           .reduce(function(accu, i) { return accu + i }, 0)

// let reduceMap = [1, 2, 3, 4].reduce(
//     function(accu, i) { return accu + i },
//     0    
// )

// function reduceMap(arr, num) {
//     arr.reduce( (arr, num) => { 
//         return arr + num     
//     } ,[])
// } 

// console.log(reduceMap([1, 2, 3, 4, 5], 1))