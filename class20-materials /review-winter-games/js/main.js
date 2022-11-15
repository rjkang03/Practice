//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
// function ruth(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }
// ruth([1, 2, 3, 4, 5, 6, 7])

function ruth(arr) {
    let newArr = [];
    arr.forEach(elem => {
        if (elem % 2 === 0) {
            newArr.push(elem)
        }
    })
    console.log(newArr)
}
ruth([1,2,3,4,5,6,7,8,9])