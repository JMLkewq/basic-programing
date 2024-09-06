const aboutMe = {
    firstName: 'Alex',
    lastName: 'Jackson',
    age: '67',
    mail: 'AlexJ@mail.com',
    phone: '0002887',
    idCard: '95444512'

}

console.log(aboutMe.firstName)

const bfriend = {
     firstName: 'pok',
     lastName: 'pong',
     fAKA: 'pokisreal',

}
console.log(bfriend.fAKA)

const myFriend = [{
    fFirstName: 'Lisa',
    fLastName: 'Mamamoosub',
    fAka: 'SuperWoman',
    age: 16
},{
    fFirstName: 'Rosse',
    fLastName: 'Mamamoosub',
    fAka: 'RoseOnpink',
    age: 20
}, {
    fFirstName: 'Jiso',
    fLastName: 'Mamamoosub',
    fAka: 'Jinny',
    age: 24
},{
    fFirstName: 'Jenny',
    fLastName: 'Mamamoosub',
    fAka: 'WonderG',
    age: 17
}]

const myFriendsAKA = myFriend.map(function(element, index){
    return({
        firstName: element.fFirstName,
        AKA: element.fAka
    })

})

const myFriendMoreThan = myFriend.filter(function(element, index) {
      return element.age > 19 && element.fLastName === 'Mamamoosub'
})

console.log(myFriendMoreThan)

