//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', makeMagic)

function makeMagic(){
    let date = document.querySelector('input').value
    console.log(date)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=0L1SheeDibABpqCqu0IMmNnMvHSvwl8aVWkKuYLX&date=${date}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = data.title
        document.querySelector('h3').innerHTML = data.explanation
        if(data.media_type == 'image'){
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').style.display = 'none'
            document.querySelector('img').style.display = 'block'

        }else if(data.media_type == 'video'){
            document.querySelector('img').style.display = 'none'
            document.querySelector('iframe').style.display = 'block'
            document.querySelector('iframe').src = data.url

        }

    })
}

// After you make the fetch request the response is parsed as a json object (what you get in return). If you console.log the object you'll see a variety of properties. Title is one of them so we use dot notation to get access to it and assign that text to our h2 (printing it to the DOM)

// console.log(data);
// right before the if/else conditional
// We usually like to console.log(data) because it shows us all of the properties of said object, as well as making sure we get an object returned. From there we can choose what we do next with the properties 🙂  