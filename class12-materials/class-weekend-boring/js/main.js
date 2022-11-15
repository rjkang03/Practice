// document.querySelector('#check').addEventListener('click', check)
// // document.querySelector("#check").addEventListener("")

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   //Conditionals go here
//   if (day === "tuesday" || day === "thursday" ) {
//     document.querySelector("#placeToSee").innerText = "Class Day"
//   }
//   if (day === "wednesday" || day === "monday") {
//     document.querySelector("#placeToSee").innerText = "Boooooringgg"
//   }
//   else {
//     document.querySelector("#placeToSee").innerText = "It's the weekend!"
//   }
// }


document.querySelector("#check").addEventListener("click", check)

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerText = "Class Day"
  }
  if (day === 'wednesday' || day === "monday") {
    document.querySelector("#placeToSee").innerText = "Boooooorinngggg"
  } else {
    document.querySelector("#placeToSee").innerText = "It's the weekend!"
  }
}