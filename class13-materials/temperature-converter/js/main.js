//Write your pseduo code first! 
// write html for input to accept a value. 
//declare a variable and assign to the value (pulled with qselector)
// do math to value to convert and return

// document.querySelector("#convert").addEventListener("click", convert)

// function convert() {
//     let temp = document.querySelector("#cel").value
//     temp = temp * 9/5 + 32
//     document.querySelector("#showConvert").innerText = temp
// }



// add event listener on butto, make it run fn that will take the input value, do quick maths, update display

document.querySelector("#convert").addEventListener("click", convertFn)

function convertFn() {
    let temp = document.querySelector("#cel").
    temp = temp * 9/5 + 32;
    document.querySelector("#showConvert").innerText = temp;
}