function add(a: number, b: number) {
    return a + b
}
console.log(add(7, 9))

function lob(a: number, b: number) {
    return a - b
}
console.log(lob(8, 4))

function perm(a: number, b: number, c: number, d: number) {
    return a * b * c * d
}
console.log(perm(10, 5, 55, 24))

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50) {
        return 'สอบตก'
    }else{
        return 'สอบผ่าน'
    }
}
console.log(grade(15, 16, 19))

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50) {
        return 'เกรด F'
    }else if (score < 60 ){
        return 'เกรด D'
    }else if (score <70 ){
        return 'เกรด C'
    }else if (score < 80){
        return 'เกรด b'
}else{
    return 'เกรด A'}

}
console.log(grade(30, 20, 26))
