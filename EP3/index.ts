function helloWorld() {
    console.log("สวัสดี")
   }    
   
   helloWorld()
   
   
function helloName(Name: string) {
       console.log("Kewq")
   }    
    
console.log(helloName('Kewq'))
   
function getPi() {
       return 3.14
   }
    
    getPi()
   
    console.log(getPi())
    
function st(fname: string, sname: string) {
if (fname === 'Kewq' || sname === 'Kylian') {
    console.log('เริ่มสอน')
}else{
    console.log('ไม่สอน')
 }
}
st('Kewq', 'Kylian')

function st(fname: string, sname: string, tname: string) {
    if (fname === 'mix' && sname === 'zane' || tname === 'forth' ) {
        console.log('พร้อมเรียน')
}else{
        console.log('ยังไม่พร้อม')
     }
}
    st('mix', 'zane', 'forth')