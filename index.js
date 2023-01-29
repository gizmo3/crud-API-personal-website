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