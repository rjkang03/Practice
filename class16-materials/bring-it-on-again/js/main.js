// *Variables*
// Declare a variable, assign it a value, and alert the value

// const name = "ruth"

// Create a variable, divide it by 10, and console log the value

// let age = 33
// console.log(age /= 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

// function multiply(a, b, c) {
//     alert(a * b *c)
// }

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

// function fourNums(a, b, c, d) {

// }

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

// function ruth(a, b, c) {
//     let age = ((100 + a) - b) / c
//     if(age > 25) {
//         console.log("We have a winna")
//     }
// }

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function prize(day) {
    day = day.toLowerCase();
    if(day === "saturday" || day === "sunday") {
        alert("weekend!")
    } else if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
        alert("weekday!")
    } else {
        alert("try again!")
    }
}
prize("king")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function logThirds(num) {
    for(let i = 1; i <= num; i+3) {
        console.log(i)
    }
}