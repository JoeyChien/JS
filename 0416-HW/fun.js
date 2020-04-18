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

