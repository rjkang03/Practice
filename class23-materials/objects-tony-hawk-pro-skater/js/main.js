//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter(name, experience, age, weight) {
    this.name = name
    this.experience = experience
    this.age = age
    this.weight = weight

    this.kickFlip = () => {
        console.log('I nailed a kickflip')
    },

    this.goHome = () => {
        console.log('Imma bounce, late')
    },

    this.rest = () => {
        console.log('Imma take a break')
    }
}
let tony = new MakeCharacter('tony', '10 years', 18, 188)
console.log(tony)
console.log(tony.rest())