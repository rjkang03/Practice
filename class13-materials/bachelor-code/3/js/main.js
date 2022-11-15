// const contestants = document.querySelectorAll(".contestant")

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains("rose")){
// 		document.querySelector('#nikki').classList.toggle("hidden")
// 	}else{
// 		alert("Wrong!");
// 	}
// }


// in js file create a var and store the elements that display names of contestants (returns an array)
// loop through the array you just created, for each element, set an eventlistener on a click that runs a fn
// declare a fn that takes in the eventlistener. if the clicks target has a class that contains the a certain value then target the image of that person and toggle the class hidden 
// otherwise display an alert "Wrong!"

let ladies = document.querySelectorAll(".contestant")

Array.from(ladies).forEach(element => element.addEventListener("click", showPic))

function showPic(click) {
	if(click.target.classList.contains("rose")) {
		document.querySelector("#nikki").classList.toggle("hidden")
	} else {
		alert("WRONG!")
	}
}