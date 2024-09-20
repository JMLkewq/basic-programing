const database =[
    {
        email: 'user@gmail.com',
        password: 'duck8888'
    }
]

function register(email: string,password: string){
    if (email.includes('0') && email.lastIndexOf('0') !== email.length -1) {
       if (password.length > 8 && password.length < 16 ){
           const userObject = {
            email: email,
            password: password
           }
           database.push(userObject)
           alert('สมัครสมาชิกแล้ว ยินดีต้อนรับ คุณ' + email)
       }else{
        alert('รหัสต้องมากกว่า 8 ตัว และไม่เกิน 16')
       }
    }else{
        alert('email ไม่ถูกต้อง')
    }
}

register('kew.com','8955485485')