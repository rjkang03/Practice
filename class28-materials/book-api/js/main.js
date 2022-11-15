
//enter an ISBN and return book title
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.setItem('books', data.title) //set on pageload

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if (!localStorage.getItem('books')) { //if books is not set in LS, set it with data.title
          localStorage.setItem('books', data.title)
        } else {
          let books = localStorage.getItem('books') + ', ' + data.title //if books IS in LS, add previous books and new book 
          localStorage.setItem('books', books)
        }
        document.querySelector('h2').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}





