function getDiscountRate(num) {
    let discount = 1
    if (num >= 1000){
        return 0.8
    }
    else if (num >= 100){
        return 0.85
    }else {
        return 0.9
    }
}

function getTextRate(){
    return 1.05
}

function calc(num){
    return num * getDiscountRate(num) * getTextRate()
}

console.log(calc(50))