//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [2, 5, 356, 33]
alert(arr.reduce((accum, num) => accum + num, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
    return arr.map(elem => elem * elem)
}
console.log(squared([1, 2, 3, 4]))

//Create a function that takes string
//Print the reverse of that string to the console
function backwardStr(str) {
    let reverseStr = str.split('').reverse().join('')
    console.log(reverseStr)
}
backwardStr('thanksgiving')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPalindrome(str) {
   alert(str === backwardStr(str))
}
checkPalindrome('thanksgiving')
