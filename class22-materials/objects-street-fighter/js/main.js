//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter(specialMove, weight, gender, fullName) {
    this.specialMove = specialMove
    this.weight = weight
    this.gender = gender
    this.fullName = fullName
    this.punch = () => console.log('I punched you')     
    this.kick = () => console.log('I kicked you')
    this.win = () => console.log('haha I win')
    this.taunt = () => console.log(`You can't handle my ${this.specialMove}`)
}

let ryu = new MakeCharacter('aducun', 150, 'male', 'Ryu Yoshi')