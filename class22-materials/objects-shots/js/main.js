//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener('click', displayRecipe)

function displayRecipe() {
    let input = document.querySelector('input').value
    document.querySelector('h2').innerText = input;
    document.querySelector('h3').innerText = '3 oz vodka, 1 olive of choice'
}
