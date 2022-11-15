//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [9, 12, 63, 3, 293]
let num = arr.reduce((accum, elem) => accum + elem , 0)
alert(num)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function ruth(arr) {
    return arr.map(elem => elem * elem)
}
console.log(ruth([1, 4, 25, 84]))

//Create a function that takes string
//Print the reverse of that string to the console
function ruth(str) {
    let splitStr = str.split("").reverse().join('')
    return splitStr;
}
console.log(ruth('thanksgiving'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeCheck(str) {
    let reversed = str.split('').reverse().join('')
    return reversed === str;
}
console.log(palindromeCheck('racecar'))