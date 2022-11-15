//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Family Guy', 'Shark Tank', 'Sister Sister']
tvShows.filter(elem => console.log(elem))

//Create and array of numbers
let nums = [3, 5, 66, 2343, 41]
//Return a new array of numbers that includes every even number from the previous Arrays
let evenNums = arr => arr.filter(elem => elem % 2 === 0);
console.log(evenNums(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function ruth(arr) {
    let sorted = arr.sort((a, b) => a - b);
    return (sorted[1] + sorted[sorted.length-2])
}
console.log(ruth([4, 55, 424, 1, 26]))