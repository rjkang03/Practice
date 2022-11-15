// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
// let faveHoliday = "Easter";
// faveHoliday = "Halloween";
// console.log(faveHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
// let county = "orange"
// console.log(county.slice(-3))


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
// function ruth(num1, num2, num3, num4, num5) {
//     alert(100 - num1 - num2 - num3 - num4 - num5)
// }
// ruth(1, 2, 3, 4, 5)



// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
// function ruth(num1, num2, num3) {
//     console.log(Math.max(num1, num2, num3));
//     console.log(Math.min(num1, num2, num3));
// }
// ruth(49, 99, 124)


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails() {
//     let result = Math.random()
//     if (result < .5) {
//         return "heads"
//     } else {
//         return "tails"
//     }
// }
// console.log(headsOrTails())
const headsOrTails = _ => Math.random() < .5 ? "heads" : "tails"



//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipFlip(n) {
    for (let i = 1; i <= n; i++) {
        let result = headsOrTails()
        console.log(result)
    }
}
flipFlip(10)