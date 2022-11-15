//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase();

//   if(day === "tuesday" || day === "thursday"){
//     document.querySelector("#placeToSee").innerText = "CLASS"
//   }else if( day === "saturday" || day === "sunday"){
//     document.querySelector("#placeToSee").innerText = "WEEKEND"
//   }else{
//     document.querySelector("#placeToSee").innerText = "BORING"
//   }

// }

document.querySelector("#check").addEventListener("click", dayFn)

function dayFn() {
  let day = document.querySelector("#day").value.toLowerCase()
  if(day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerText = "class day"
  }
  if(day === "wednesday" || day === "monday") {
    document.querySelector("#placeToSee").innerText = "boringggg"
  } else {
    document.querySelector("#placeToSee").innerText = "Weekend!"
  }
}