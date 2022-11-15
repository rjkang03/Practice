//Write your pseduo code first! 

// document.querySelector("#convert").addEventListener("click", convertFn)

// function convertFn() {
//     let temp = document.querySelector("#cel").value;
//     temp = temp * 9/5 + 32;
//     document.querySelector("#placeToSee").innerText = temp;
// }



document.querySelector("#convert").addEventListener("click", convertFn)

function convertFn() {
    let temp = document.querySelector("#cel").value 
    temp = temp * 9/5 + 32;
    document.querySelector("#placeToSee").innerText = temp 
}