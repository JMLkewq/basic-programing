const score: number[] =[10,23,26,30,33] 

let sum: number = 0

for (let i = 0; i < score.length; i++){
    sum = sum + score [i]
}

let avg = sum / score.length
console.log("Total; ", sum)
console.log("avg;", avg)

const myStudent: string = "เซน,แทน,เวฟ,รุ้ง,แทก,สร"

const myStudentArray: string[] = myStudent.split(',')

console.log(myStudent)
console.log(myStudentArray)

const animal: string = "dog*cat*rabbit*bear"

const animalArray: string[] = animal.split('*')

console.log(animal)
console.log(animalArray)

const animal: string = "dog*cat*rabbit*bear"

const animalArray: string[] = animal.split('*')

console.log("ตั้งต้น: ", animalArray)

animalArray.pop() 

console.log("เอาตัวสุดท้ายออก: " ,animalArray)

animalArray.push('ยีราฟ')

console.log("ใส่ตัวท้าย: " , animalArray)

animalArray.shift()

console.log("เอาตัวหน้าออก: " , animalArray)

animalArray.unshift('กาปิบาระ')

console.log("ใส่ตัวหน้า: " , animalArray)

const friendsName: string = "รุจ, เฟิร์ส, ป้อง, โอม"

const friendsNameArray: string[] = friendsName.split(',')

friendsNameArray.sort()

console.log("เรียง ก - ฮ: ", friendsNameArray)

friendsNameArray.reverse()

console.log("เรียง ฮ - ก: ", friendsNameArray)

const me = {
    firstName: 'Krittaphat',
    lastname: 'Klinchuen',
    age: 19 ,
    gender: 'male' ,
    birthday: '19/08/2005' ,
    tel: '0926182002' ,
    address: 'Samutprakaarn Thailand' ,




}