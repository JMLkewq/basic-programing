let sum: number = 0
let i: number = 1
do{
    sum = sum + 1
    i++
}while (i <=31)
console.log('total:' , sum)

let count: number = 0
while (true) {
    console.log ("โสดเว้ย")
    count++
    if (count ===10){
        break
   }
}

let age: number = 1
while (true) {
   console.log ('น้องอายุ', age ,'ปี')
   age++
   if (age ===18){
       break
   }
}

for (let i =1; i <= 13; i++){
   console.log('น้องอายุ' + i + 'ปี')
}

let i: number = 1
while (i <= 13){
    console.log('ฉันอายุ'+ i + 'ปี')
    i++
}

let i: number = 1
do {
   console.log('ฉันอายุ' + i + 'ปี')
    i++
    }    while(i <= 13)

let car1: string = 'toyota'
let car2: string = 'honda'
let car3: string = 'suzuki'
let car4: string = 'yamaha'
let car5: string = 'mazda'

const cars: string[] = ['toyota' , 'honda' , 'suzuki' , 'yamaha' , 'mazda']

cars[2] = 'isuzu'
console.log(cars[2])

const cars: string[] = ['toyota' , 'honda' , 'suzuki' , 'yamaha' , 'mazda']
const str: string = 'ชอบก็จัด ประหยัดทำไม'
console.log(str.charAt(2))

const cars: string[] = ['toyota' , 'honda' , 'suzuki' , 'yamaha' , 'mazda']

for (let i = 0; i <  cars.length; i++){
   console.log(cars[i])
}

const cars: string[] = ['toyota' , 'honda' , 'suzuki' , 'yamaha' , 'mazda']

for (let i = 0; i < cars.length;){
    if (cars[i] === 'yamaha'){

    }
    console.log('รถป้าต๋อย')
}
console.log(cars.includes('BYD'))

const cars: string[] = ['toyota' , 'honda' , 'suzuki' , 'yamaha' , 'mazda']

const str: string = 'Forth'

console.log(str.indexOf('x'))
console.log(cars.includes('honda'))

const freindName: string[] = ['pokpong' , 'ruj' , 'ohm' , 'pete' , 'sorn' , 'tae' , 'name' , 'mhoo' , 'chew']

for (let i = 0; i< freindName.length; i++){
    if(freindName[i]=== 'pokpong'){

    console.log('ไปเตะบอลกัน')
    }
}

const quality: number[] = [1 , 2 , 3 , 4 , 5 ,6 , 7 , 8 , 9 , 10 ]

for (let i = 0; i< quality.length; i++){
    if(quality[i] === 3 || quality[i] === 5 || quality[i] === 7 ) {
        quality[i] = 0
    }
}

console.log(quality)
