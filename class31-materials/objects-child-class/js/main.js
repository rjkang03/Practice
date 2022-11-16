//Create an a class and extend it - Can be anything you would like it to be! 

class cat extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
    speak(){
        console.log('MEOW')
    }
}
