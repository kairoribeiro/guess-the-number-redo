

/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let secretNum
let guessList
let isWinner


/*------------------------ Cached Element References ------------------------*/
const form = document.querySelector("form")
const guessInput = document.querySelector("#guess-input")
const guessesEl = document.querySelector("#prev-guesses")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#reset-button")
const prevGuessMsg = document.querySelector("#prev-guesses-msg")

/*----------------------------- Event Listeners -----------------------------*/
form.addEventListener("reset", init)


/*-------------------------------- Functions --------------------------------*/
// init()

function init() { // when you init the game - reset
  guessesEl.textContent = "" //empty the prev guesses div
  messageEl.textContent = "Please enter a guess between 1 and 100!"
  resetBtn.setAttribute("hidden", true)
  prevGuessMsg.textContent = "" // no messege when starts
  isWinner = false // if theres not a winner
  guessList = [] //empty the guess list
  secretNum = Math.floor(Math.random() * 100 + 1) //random secret num
}
