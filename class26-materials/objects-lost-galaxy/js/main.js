//Create a dog object that has four properties and three methods
let pizza = {}

pizza.size = 'large'
pizza.topping = 'cheese'
pizza.crustStyle = 'stuffed crust'
pizza.delivery = true

pizza.toDeliver = function() {
    console.log('This pizza needs to be delivered')
}

pizza.fire = function() {
    console.log('This pizza is going into the oven')
}

pizza.cutSlices = function() {
    console.log('This pizza has been cut')
}