//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class CreateEspressoMachine {
    constructor(cost, color, brand) {
        this.cost = cost;
        this.pullsDoubles = true;
        this.color = color;
        this.brand = brand
    }
    pullSingleShot() {
        console.log('Pulling a single')
    }
    pullDoubleShot() {
        console.log('Pulling a double')
    }
    steamMilk() {
        console.log('Steaming milk')
    }
}

let gaggia = new CreateEspressoMachine(499, 'black', 'Gaggia')
console.log(gaggia)