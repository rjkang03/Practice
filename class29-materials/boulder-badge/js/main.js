// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let bulbasaurLevel = 5
let caterpieLevel = 1
let weedleLevel = 1

let bulbasaurEvolve = 16
let caterpieEvolve = 7
let weedleEvolve = 7

let bulbasaurCandiesNeeded = bulbasaurEvolve - bulbasaurLevel
let caterpieCandiesNeeded = caterpieEvolve - caterpieLevel
let weedleCandiesNeeded = weedleEvolve - weedleLevel

let totalCandies = bulbasaurCandiesNeeded + caterpieCandiesNeeded + weedleCandiesNeeded
console.log(totalCandies)


//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function fahToCel(fahTemp) {
    let celTemp = (fahTemp - 32) * 5/9;
    return celTemp; 
}

function canCharBattle(temperature) {
    if (fahToCel(temperature) > 0) {
        console.log('Get ready for battle')
    } else {
        console.log('Cannot battle')
    }
}
canCharBattle(100)

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function pokemonLeague(partySize) {
    for (let i = 1; i <= partySize; i++) {
        console.log('I choose you Pikachu!')
    }
}
pokemonLeague(8)