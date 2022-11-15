

// function creatCircle(radius) {
//     return {
//         radius,
//         draw: () => console.log('draw')
//     };
    
// }

// const newCircle = creatCircle(1)

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = () => console.log('draw')
// } 

// const another = new Circle(1)


//stop, start, reset, duration
function Stopwatch() {
    let startTime, endTime, running, duration = 0; //private

    this.start = () => {
        if (running) throw new Error('Stopwatch has already started');
        running = true; //otherwise
        startTime = new Date(); //and
    }

    this.stop = () => {
        if (!running) throw new Error('Stopwatch is not running');
        running = false; //otherwise
        endTime = new Date() //and
        let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = () => {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    this.duration = 
}


const sw = new Stopwatch()