/*所有city cafe第二杯五折(價低五折)，只有美式買一送一，買一送一優先於第二杯五折*/ 
/*三明治+茶飲49*/ 
/*飯糰+茶飲39*/ 
/*便當+茶飲99*/ 


/*優惠放置為優先順序*/
let product = [ 
    {   name: "大杯美式",
        price: 50,
        discount: ["buyOneFreeOne","second50Off"]
    },
    {   name: "中杯美式",
        price: 40,
        discount: ["buyOneFreeOne","second50Off"]
    },
    {   name: "大杯拿鐵",
        price: 60,
        discount: ["second50Off"]
    },
    {   name: "中杯拿鐵",
        price: 50,
        discount: ["second50Off"]
    },
    {   name: "三明治",
        price: 50,
        discount: ["totalA_49"]
    },
    {   name: "飯糰",
        price: 40,
        discount: ["totalA_39"]
    },
    {   name: "便當",
        price: 60,
        discount: ["totalA_99"]
    },
    {   name: "綠茶",
        price: 50,
        discount: ["totalB"]
    },
    {   name: "紅茶",
        price: 50,
        discount: ["totalB"]
    }
]

let discountList = [ 
    {   /*買一送一*/
        name: "buyOneFreeOne"
    },
    {   /*第二件5折*/
        name: "second50Off",
    },
    {   /*組合價39*/
        name: "totalA_39"
    },
    {   /*組合價49*/
        name: "totalA_49"
    },
    {   /*組合價99*/
        name: "totalA_99"
    },
    {   /*組合區飲料*/
        name: "totalB"
    }    
]
    
function buyOneFreeOne(product1, product2) {
    let result = 0
    if (product1.price > product2.price) {
        result = product1.price
    }
    result = product2.price
    return result;
}

function second50Off(product1, product2) {
    let result = 0
    if (product1.price > product2.price) {
        result = product1.price + product2.price * 0.5
    }
    result = product2.price + product1.price * 0.5
    return result;
}

function total(product1, product2, totalprice) {
    let result = 0
    result = parseInt(totalprice.split("_")[1])
    return result;
}


function discount(product1, product2){
    for (let disc1 of product1.discount){                
        for(let disc2 of product2.discount){             
            if (disc1 === disc2 && disc2 === "buyOneFreeOne"){      
                console.log("買一送一優惠 ")         
                return buyOneFreeOne(product1, product2);
            }else if (disc1 === disc2 && disc2 === "second50Off"){     
                console.log("第二件5折優惠")      
                return second50Off(product1, product2);
            }else if (disc1.substr(0, 5) === disc2.substr(0, 5) && disc2.substr(0, 5) === "total"){  
                if (disc1.length != disc2.length){
                    console.log("組合價優惠")    
                    if (disc1.length > disc2.length){
                        return total(product1, product2,disc1)
                    }else{
                        return total(product1, product2,disc2)
                    } 
                }else{
                    console.log( "~沒有優惠~")  
                    return product1.price + product2.price;
                }                
            }
        }
    }
    console.log( "~沒有優惠~")  
    return product1.price + product2.price;
}

price1 = discount(product[1],product[2])
console.log(`品項1: ${product[1].name}:${product[1].price} ,`)
console.log(`品項2: ${product[2].name}:${product[2].price} ,`)
console.log(`優惠價 ${price1} \n\n` )

price2 = discount(product[2],product[3])
console.log(`品項1: ${product[2].name}:${product[2].price} ,`)
console.log(`品項2: ${product[3].name}:${product[3].price} ,`)
console.log(`優惠價 ${price2} \n\n` )

price3 = discount(product[0],product[1])
console.log(`品項1: ${product[0].name}:${product[0].price} ,`)
console.log(`品項2: ${product[1].name}:${product[1].price} ,`)
console.log(`優惠價 ${price3} \n\n` )

price4 = discount(product[4],product[4])
console.log(`品項1: ${product[4].name}:${product[4].price} ,`)
console.log(`品項2: ${product[4].name}:${product[4].price} ,`)
console.log(`優惠價 ${price4} \n\n` )

price5 = discount(product[4],product[7])
console.log(`品項1: ${product[4].name}:${product[4].price} ,`)
console.log(`品項2: ${product[7].name}:${product[7].price} ,`)
console.log(`優惠價 ${price5} \n\n` )

price6 = discount(product[5],product[8])
console.log(`品項1: ${product[5].name}:${product[5].price} ,`)
console.log(`品項2: ${product[8].name}:${product[8].price} ,`)
console.log(`優惠價 ${price6} \n\n` )

price7 = discount(product[6],product[8])
console.log(`品項1: ${product[6].name}:${product[6].price} ,`)
console.log(`品項2: ${product[8].name}:${product[8].price} ,`)
console.log(`優惠價 ${price7} \n\n` )

price8 = discount(product[7],product[8])
console.log(`品項1: ${product[7].name}:${product[7].price} ,`)
console.log(`品項2: ${product[8].name}:${product[8].price} ,`)
console.log(`優惠價 ${price8} \n\n` )
