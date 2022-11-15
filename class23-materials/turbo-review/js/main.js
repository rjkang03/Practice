// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'I was born in Gardena'
alert(sentence.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let highSchool = 'I am looking for jr. dev positions'
console.log(highSchool.replaceAll('jr. dev', 'software engineer' ))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let num = Math.random();
    if (num < .33) return 'rock';
    else if (num < .66) return 'paper';
    else return 'scissors';
}
console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function newGame(playerChoice) {
    let botChoice = rockPaperScissors();
    if ((botChoice === 'rock' && playerChoice === 'paper') || (botChoice === 'scissors' && playerChoice === 'rock') || (botChoice === 'paper' && playerChoice === 'scissors')) {
        console.log('WINNER!')
    } else if (botChoice === playerChoice) console.log('Tie bitch')
    else console.log('LOSER')
}
newGame('paper')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
