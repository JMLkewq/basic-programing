function day(dayOfWeek: number){
    if (dayOfWeek === 1){
        console.log('วันจัทร์')
        
        else if (dayOfWeek === 2)
          console.log('วันอังคาร')
    }
    else if (dayOfWeek === 3)
        console.log('วันพุธ')
}
else if (dayOfWeek === 4)
    console.log('วันพฤหัสบดี'){
}
else if (dayOfWeek === 5)
    console.log('วันศุกร์'){
}
else if (dayOfWeek === 6)
    console.log('วันเสาร์'){
}
else if (dayOfWeek === 7)
    console.log('วันอาทิตย์'){
}

day(4)




function size(tell: string) {
    switch(tell){
        
        case 's':
        console.log ('ผอม')
        break
        case 'm':
        console.log ('ผอม')
        break
        case 'l':
        console.log ('ท้วม')
        break
        case 'xl':
        console.log ('อ้วน')
        break
        case 'xl':
        console.log ('อ้วน')
        break
    }
}

size("xl")

function fixeddecimal(n: number, digit: number){
    const x = n.toFixed(digit)
    return x

}
console.log(fixeddecimal(45.60, 29))


function fixeddecimal(n: number){
    const siu = n.toLocaleString()
    return siu

}
console.log(fixeddecimal(1000))

const str: string = "Krittaphat"

console.log(str.length)

function checkStringLenth(Kewq: string){
    const string = "krittaphat"
    console.log(Kewq.length)

    function checkStringLenth(Kewq: string){
        const x = Kewq.length
        return x
    }  
      console.log(checkStringLenth('krittaphat'))
    
    
    
}


