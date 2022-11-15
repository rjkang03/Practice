// const contestants = document.querySelectorAll(".contestant")

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains("rose")){
// 		document.querySelector('#nikki').classList.toggle("hidden")
// 	}else{
// 		alert("Wrong!");
// 	}
// }



const contestants = document.querySelectorAll(".contestant")
Array.from(contestants).forEach(element => element.addEventListener("click", showMe))

function showMe(click) {
	if(click.target.classList.contains("rose")) {
		document.querySelector("#nikki").classList.toggle("hidden")
	} else {
		alert("wRONGNGGGGGG")
	}
}