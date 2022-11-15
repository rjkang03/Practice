//Create a button that adds 1 to a botScore stored in localStorage 


// create/set new score property in local storage. make sure it doesn't reset on refresh. 
if (!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', 0)
}

// add eventlistener and run func thatgrabs curr botscore, increments it, sets new score
document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1;
    localStorage.setItem('botScore', botScoreVal)
}



//Create a button that adds 1 to a botScore stored in localStorage 
// create/set new score property in local storage. make sure it doesn't reset on refresh. 
// add eventlistener and run func thatgrabs curr botscore, increments it, sets new score

if (!localStorage.getItem('botScore')) localStorage.setItem('botScore', 0)

document.querySelector('button').addEventListener('click', anotherOne)

function anotherOne() {
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
}