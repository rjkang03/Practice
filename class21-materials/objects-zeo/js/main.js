//Create a stopwatch object that has four properties and three methods
// let stopwatch = {}

// stopwatch.brand = 'Nike'
// stopwatch.color = 'black'
// stopwatch.shape = 'round'
// stopwatch.size = 'meduim'
// console.log(stopwatch)

// stopwatch.start = function() {
//     console.log('starting')
// }

// stopwatch.stop = function() {
//     console.log('stoping')
// }

// stopwatch.beep = function() {
//     console.log('beep')
// }
// stopwatch.beep()

// Practice

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplyNumeric(menu) {
    for (let key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

  console.log(menu)