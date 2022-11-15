//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reversePartyOrder(arr) {
    arr.reverse().forEach(elem => console.log(elem))
}
reversePartyOrder(['i', 'don\'t', 'know', 'any', 'pokemon'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareSquareAndCube(arrA, arrB) {
    return arrA.reduce((elem, accum) => accum + Math.pow(elem, 2), 0) > arrB.reduce((elem, accum) => accum + Math.pow(elem, 3), 0)
}
console.log(compareSquareAndCube([3, 2], [3, 2]))

function theGreaterArrIs(arr1, arr2) {  
    let squaredArr1 = arr1.map(elem => Math.pow(elem, 2))
    let squaredArr1Sum = squaredArr1.reduce((elem, accum) => {
        return accum + elem;
    },0)    

    let squaredArr2 = arr2.map(elem => Math.pow(elem, 3))
    let squaredArr2Sum = squaredArr2.reduce((elem, accum) => {
        return accum + elem;
    },0) 
    if (squaredArr1Sum === squaredArr2Sum) console.log('true')
    else console.log('false')
}
theGreaterArrIs([2, 3], [3, 2])

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple2(arr) {
    return arr.filter((elem, i) => elem % i === 0)
}
console.log(isMultiple2([22, -6, 32, 82, 9, 25]))

function isAMultiple(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % i === 0) newArr.push(arr[i])
    }
    console.log(newArr)
}
isAMultiple([22, -6, 32, 82, 9, 25])


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
// function makeStrNum(arr) {
//    return arr.reduce((accum, elem) => accum + Number(elem), 0)
// }
// console.log(makeStrNum(['3', 3]))

const s = r => r.reduce((accum, elem) => +accum + +elem)
console.log(s(['3', 3]))