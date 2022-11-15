// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
// document.querySelector("#ruthie").addEventListener("click", addOne)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function addOne() {
//   total += 1;
//   document.querySelector("#placeToPutResult").innerHTML = total
// }


let total = 0;

document.querySelector("#pumpkin").addEventListener("click", makeZero)
document.querySelector("#dominosPizza").addEventListener("click", addThree)
document.querySelector("#zebra").addEventListener("click", addNine)
document.querySelector("#cantThinkOfAnything").addEventListener("click", minusTwo)
document.querySelector("#ruthie").addEventListener("click", addOne)


function makeZero() {
  total = 0;
  document.querySelector("#placeToPutResult").innerText = total;
}

function addThree() {
  total += 3;
  document.querySelector("#placeToPutResult").innerText = total;
}

function addNine() {
  total += 9;
  document.querySelector("#placeToPutResult").innerText = total;
}

function minusTwo() {
  total -= 2;
  document.querySelector("#placeToPutResult").innerText = total;
}

function addOne() {
  total += 1;
  document.querySelector("#placeToPutResult").innerText = total;
}