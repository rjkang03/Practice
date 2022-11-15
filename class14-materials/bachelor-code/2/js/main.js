// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function andiNext(){
// 	claire.classList.add("hidden")
// 	sharleen.classList.add("hidden")
// 	andi.classList.toggle("hidden")
// }

// function claireNext(){
// 	andi.classList.add("hidden")
// 	sharleen.classList.add("hidden")
// 	claire.classList.toggle("hidden")
// }

// function sharleenNext(){
// 	andi.classList.add("hidden")
// 	claire.classList.add("hidden")
// 	sharleen.classList.toggle("hidden")
// }


const andi = document.querySelector("#andi");
const claire = document.querySelector("#claire");
const sharleen = document.querySelector("#sharleen");

document.querySelector("#andiNext").addEventListener("click", showAndi)
document.querySelector("#claireNext").addEventListener("click", showClaire)
document.querySelector("#sharleenNext").addEventListener("click", showShar)

function showAndi() {
	andi.classList.toggle("hidden")
	claire.classList.add("hidden")
	sharleen.classList.add("hidden")
}

function showClaire() {
	andi.classList.add("hidden")
	claire.classList.toggle("hidden")
	sharleen.classList.add("hidden")
}

function showShar() {
	andi.classList.add("hidden")
	claire.classList.add("hidden")
	sharleen.classList.toggle("hidden")
}