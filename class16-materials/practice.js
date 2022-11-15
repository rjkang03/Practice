// THE JSWAY READING CODE ALONG
// let hour = Number(prompt("hour"))
// let min = Number(prompt("min"))
// let sec = Number(prompt("sec"))

// while(hour > 23){
//     hour = Number(prompt("Sorry, your input was invalid, please enter a number between 0 and 23"))
//   }
  
//   while(min > 59){
//     min = Number(prompt("Sorry, your input was invalid, please enter a number between 0 and 59"))
//   }
  
//   while(sec > 59){
//     sec = Number(prompt("Sorry, your input was invalid, please enter a number between 0 and 59"))
//   }
  

// if (sec < 59) {
//     sec++;
// } else if (sec === 59) {
//     sec = 0;
//     if (min < 59) {
//         min++;
//     } else if (min === 59) {
//         min = 0;
//         if (hour < 23) {
//             hour++;
//         } else if (hour === 23) {
//             hour = 0;
//         } 
//     }
// }
// document.querySelector("h1").innerText = (`${hour}h${min}m${sec}s`)

// let turns = 1;
// while (turns <= 10) {
//     console.log(turns);
//     turns++
// }

// let turns = 1;
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let turns = Number(prompt("Enter number of turns"))
// for (let i = 1; i <= turns; i++) {
//     console.log(i)
// }

// let input = Number(prompt("enter number please"))
// while (input < 50 || input > 100) {
//     input = Number(prompt("Please enter a number between 50 and 100"))
//     console.log(input)
// }

// let num = Number(prompt("enter a number"))
// for (let i = 0; i <= 10; i++) {
//     let result = num * i;
//     console.log(`${num} * ${i} = ${result}`)
// }

// let input = Number(prompt("enter a number"))
// if (input < 2 || input > 9) {
//     input = Number(prompt("enter number between 2-9"))
//     for (let i = 0; i <= 10; i++) {
//         let result = input * i;
//         console.log(`${input} * ${i} = ${result}`)
//     }
// }

// let answer = prompt("say yes or no")
// if (answer !== "yes" || answer !== "no") {
//     answer = prompt("enter ONLY yes or no")
//     console.log(answer)
// }

// for (let i = 1; i <= 100; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//     console.log("FizzBuzz");
//     continue;
//     } if (i % 3 === 0) {
//     console.log("Fizz");
//     continue;
//     } if (i % 5 === 0) {
//         console.log("Buzz");
//         continue;
//     }
//     console.log(i)
// }

// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}`;
//     return message;
// }
// let firstName = prompt("enter first name")
// let lastName = prompt("enter last name")
// console.log(sayHello(firstName, lastName))


// function square1(x) {
//     return x * x;
//   }

//   const square2 = x => x * x;
  
//   console.log(square1(0)); // Must show 0
//   console.log(square1(2)); // Must show 4
//   console.log(square1(5)); // Must show 25 
//   console.log(square2(0)); // Must show 0
//   console.log(square2(2)); // Must show 4
//   console.log(square2(5)); // Must show 25

//   function squareToTen() {
//     for (let i = 0; i <= 10; i++) {
//         console.log(i * i)
//     }
//   }
//   squareToTen()

// TODO: write the min() function
// function min(num1, num2) {
//     if (num1 < num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9));  // Must show 9
// console.log(min(1, 1));   // Must show 1


// function calculate(arg1, arg2, arg3) {
//     if (arg2 === "+") {
//         return arg1 + arg3
//     } else if (arg2 === "-") {
//         return arg1 - arg3
//     } else if (arg2 === "*") {
//         return arg1 * arg3
//     } else if (arg2 === "/") {
//         return arg1 / arg3
//     }
// }
// console.log(calculate(4, "+", 6));  // Must show 10
// console.log(calculate(4, "-", 6));  // Must show -2
// console.log(calculate(2, "*", 0));  // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity


// let radius = prompt("enter radius")
// function circ() {
//     return 2 * Math.PI * radius
// }
// function area() {
//     return Math.PI * radius ** 2;
// }
// console.log(circ())
// console.log(area())

// ELOQUENT PRACTICE//////////////

// function postHash() {
//     let out = "#";
//     for (let i = 0; i <= 7; i++) {
//         console.log(out);
//         out += "#";
//     }
// }
// postHash()

// function printFizzOrBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizzbuzz")
//         }
//         if (i % 3 === 0) {
//             console.log("Fizz");
//             continue;
//         } 
//         if (i % 5 === 0) {
//             console.log("Buzz");
//             continue;
//         }
//         console.log(i);
//     }
// }

// printFizzOrBuzz()

function chessBoard() {
    for (let i = 1; i <= 8; i++) {i 
        let row = "";
        for (let j = 1; j <= 4; j++) {
            if (i % 2 === 1) {
                row += " #"
            } else {
                row += "# "
            }
        }
        console.log(row)
    }
}
chessBoard()