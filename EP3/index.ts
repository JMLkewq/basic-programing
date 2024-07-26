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

function st(fname: string, sname: string, tname: string) {
        if (!(fname === 'mix' || sname === 'zane') && tname === 'forth' ) {
            console.log('พร้อมเรียน')
}else{
            console.log('ยังไม่พร้อม')
    }
}
    st('mix', 'zane', 'forth')


function soldier(gender: string, height: number, weight: number) {
    if (gender === 'men' && height > 170 || weight > 50 && weight <== 110){
        console.log('จับใบดำใบแดง')
    }else{ 
        console.log('ไม่ถึงเกณฑ์')
    }
}
    soldier('men', 183, 87)

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
    
    function st(fname: string, sname: string, tname: string) {
            if (!(fname === 'mix' || sname === 'zane') && tname === 'forth' ) {
                console.log('พร้อมเรียน')
    }else{
                console.log('ยังไม่พร้อม')
        }
    }
        st('mix', 'zane', 'forth')
    
    
    function wallet(age: number, salary: number, deposit: number) {
        if (age >= 16 && salary < 70000 && deposit < 500000 ){
            console.log('รับ 10000')
        }else{ 
            console.log('อดแดรก')
        }
    }
        wallet(19, 15000, 35000)
    
    