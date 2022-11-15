// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue


// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }


// access the document. access the element we want to target. specify the event, then do this.
// declare the function. access the document and the element we want to target. add a style to the background using css prop.
// access the element we want to target. add style using the css property. 

document.getElementById("purple").onclick = makePurple;
document.getElementById("green").onclick = makeGreen;
document.getElementById("blue").onclick = makeBlue;
document.getElementById("purple").onmouseover = makeYellow;

function makePurple() {
  document.querySelector("body").style.background = "rgba(241,63,247,1)"
  document.querySelector("body").style.color = "white"
}

function makeGreen() {
  document.querySelector("body").style.background = "rgba(0,253,81,1)"
  document.querySelector("body").style.color = "white"
}

function makeBlue() {
  document.querySelector("body").style.background = "rgba(0,254,255)"
  document.querySelector("body").style.color = "white"
}

function makeYellow() {
  document.querySelector("body").style.background = "pink"
  document.querySelector("body").style.color = "green"
}