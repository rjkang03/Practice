
// //create var to store deck id. fetch on page load that grabs deck id and stores value in deckId
// let deckId = ''
//  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         deckId = data.deck_id
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

// // add event listener on button. url say count=2. show img in DOM. run helper fn with card.value to handle face cards/convert str num to Number. check who won. 
// document.querySelector('button').addEventListener('click', drawTwo)

// function drawTwo(){
//     const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

//     fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//         document.querySelector('#player-1').src = data.cards[0].image
//         document.querySelector('#player-2').src = data.cards[1].image

//         let player1Val = convertToNum(data.cards[0].value)
//         let player2Val = convertToNum(data.cards[1].value)

//         if (player1Val > player2Val) {
//             document.querySelector('h3').innerText = 'Player 1 Wins!'
//         } else if (player1Val < player2Val) {
//             document.querySelector('h3').innerText = 'Player 2 Wins!'
//         } else {
//             document.querySelector('h3').innerText = 'WARRR!!'
//         }
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }


// function convertToNum(val) {
//     if (val === 'ACE') {
//         return 14
//     } else if (val === 'KING') {
//         return 13
//     }else if (val === 'QUEEN') {
//         return 12
//     }else if (val === 'JACK') {
//         return 11
//     } else {
//         return Number(val)
//     }
// }

// create API that grabs a deck of cards, deals two cards, displays cards in DOM, declares winner
//create var to store deck id. fetch on page load that grabs deck id and stores value in deckId
// add event listener on button. url say count=2. show img in DOM. run helper fn with card.value to handle face cards/convert str num to Number. check who won. 

let deckId = ''
fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    document.querySelector('button').addEventListener('click', drawTwoCards)
    function drawTwoCards() {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                document.querySelector('#player-1').src = data.cards[0].image
                document.querySelector('#player-2').src = data.cards[1].image

                let player1 = convertToNum(data.cards[0].value)
                let player2 = convertToNum(data.cards[1].value)

                if (player1 > player2) document.querySelector('h3').innerText = 'Player 1 wins!'
                else if (player1 < player2) document.querySelector('h3').innerText = 'Player 2 wins!'
                else document.querySelector('h3').innerText = 'WARRRRRR!!!'

            })
            .catch(err => {
                console.log(`error ${err}`)
            })
    }

    function convertToNum(val) {
        if (val === 'JACK') return 11
        else if (val === 'QUEEN') return 12
        else if (val === 'KING') return 13
        else if (val === 'ACE') return 14
        else return Number(val)
    }