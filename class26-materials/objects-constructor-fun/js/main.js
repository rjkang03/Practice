//Create a constructor with 4 properties and 3 methods
function MakePizza(size, topping, crust, sauce) {
    this.size = size
    this.topping = topping
    this.crust = crust
    this.sauce = sauce

    this.deliver = function() {
        console.log('Out for delivery')
    }

    this.cut = function() {
        console.log('This pizza has been cut')
    }
    this.frisbee = function() {
        console.log('Yee!')
    }
}

let newPizza = new MakePizza('large', ['garlic', 'sausage'], 'regular', 'spicy red')