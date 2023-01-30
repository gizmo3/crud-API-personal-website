// Fetch API's 

fetch("https://animechan.vercel.app/api/random/anime?title=One Piece")
            .then((response) => response.json())
            .then((quote) => {
              console.log(quote)
              document.getElementById('quote').innerHTML = quote.quote
              document.getElementById('character').innerHTML = quote.character

});

fetch("https://api.chess.com/pub/player/Gizmo373/stats")
            .then((response) => response.json())
            .then((stats) => {
              console.log(stats)
              document.getElementById('rapidStat').innerHTML = stats.chess_rapid.last.rating
              document.getElementById('recordWin').innerHTML = stats.chess_rapid.record.win
              document.getElementById('recordLoss').innerHTML = stats.chess_rapid.record.loss

});

fetch("https://api.chess.com/pub/puzzle")
    .then((response) => response.json())
    .then((puzzle) => {
      console.log(puzzle)
      document.getElementById('puzzleTitle').innerHTML = puzzle.title
      document.getElementsByClassName("thumbnail")[2].src = puzzle.image;
      document.getElementsByClassName("author")[2].href = puzzle.url;



});

fetch("https://random.dog/woof.json") 
  .then((response) => response.json())
  .then((dog) => {
    document.getElementsByClassName("thumbnail")[3].src = dog.url;
  })




fetch("https://stoicquotesapi.com/v1/api/quotes/random")
.then((response) => response.json())
.then((stoic) => {
  console.log(stoic)
  document.getElementById('stoic').innerHTML = stoic.body
  document.getElementById('writer').innerHTML = stoic.author

})


// Integrating Crud
// ----------------------------------------

let form = document.getElementById("form")
let posts = document.getElementById("posts")
let msg = document.getElementById("msg")
let input = document.getElementById("input") //text area

// adding event listener with "submit" because it is a submit button
form.addEventListener("submit", (e) => {
  e.preventDefault() // stops the page from refreshing after button click
  console.log("button clicked")
  formValidation()
})

// if its (the form) blank do this , if its filled do this
let formValidation = () => {
  if(input.value === ""){
    msg.innerHTML = "Post cannot be blank"
    console.log("L")
  } 
  else {
    msg.innerHTML = ""
    console.log("W")
    acceptData()
  }
}

let data = {}

// collecting data from text area and putting it in data object
let acceptData = () => {
  data["text"] = input.value
  console.log(data)
  createPost()
}

let createPost = () => {
  posts.innerHTML += 
  `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick="deletePost(this)" class="fa-sharp fa-solid fa-trash"></i>
    </span>
  </div>
  `

  input.value = ""
}

let deletePost = (e) => {
  e.parentElement.parentElement.remove()
}

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML
}