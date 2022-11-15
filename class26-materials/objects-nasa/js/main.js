//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// document.querySelector('button').addEventListener('click',getNasa)

// function getNasa() {
//     let date = document.querySelector('input').value
//     fetch(`https://api.nasa.gov/planetary/apod?api_key=KRPKcaHylAwTUQ12xh0gtVgA8PNHngfafkI1FvMO&date=${date}
//     `)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data)
//             document.querySelector('h2').innerText = data.title
//             document.querySelector('h3').innerText = data.explanation
//             if (data.media_type === 'image') {
//                 document.querySelector('img').src = data.hdurl
//             } else if (data.media_type === 'video') {
//                 document.querySelector('img').src = data.url
//             }
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// }




