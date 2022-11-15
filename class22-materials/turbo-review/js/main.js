// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let faveDrink = " water ";
faveDrink = faveDrink.trim()
console.log(faveDrink)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fullName = 'Ruth Fox';
if (fullName.search('apple') !== -1) console.log('yes');
else {
    console.log('no')
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function game() {
    let num = Math.random();
    if (num < .33) return 'paper';
    else if (num < .66) return 'rock';
    else return 'scissors'
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
    let botChoice = game();
    if ( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper') ) console.log('Human wins');
    else if (playerChoice === botChoice) console.log('Tie')
    else console.log("Bot wins")
}
checkWin('paper')


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGame(arr) {
    arr.forEach(choice => checkWin(choice))
}

playGame(['rock', 'paper', 'scissors'])