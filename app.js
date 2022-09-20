

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
form.addEventListener("submit", submit)


/*-------------------------------- Functions --------------------------------*/
init()

function init() { // when you init the game - reset
  messageEl.className = ""
  guessesEl.textContent = "" //empty the prev guesses div
  messageEl.textContent = "Please enter a guess between 1 and 100!"
  resetBtn.setAttribute("hidden", true)
  prevGuessMsg.textContent = "" // no messege when starts
  isWinner = false // if theres not a winner
  guessList = [] //empty the guess list
  secretNum = Math.floor(Math.random() * 100 + 1) //random secret num
  render()
}

function submit(evt) {
  evt.preventDefault() // prevent page from restart when you submit a form
  if (isWinner === false) {
    checkGuess(parseInt(guessInput.value))
  }
}

function checkGuess(guess) {
  guessInput.value = ""
  if (isNaN(guess) || guess < 1 || guess > 100) {
    renderError("Whoops! Please enter a number from 1 to 100.")
  }
  else if (guess === secretNum) {
    isWinner = true
  }
    guessList.push(guess)
    render()
  }


function renderError(error) {
  messageEl.textContent = error
  messageEl.className = "error"
}

function render() {
  const lastGuess = guessList[guessList.length - 1]
  const div = document.createElement('div')
  div.textContent = lastGuess

  if (guessList.length === 1) {
    prevGuessMsg.textContent = "Previous Guesses"
    resetBtn.removeAttribute("hidden")
  }

  if (isWinner) {
    renderWin(div)
  } else if (lastGuess > secretNum || lastGuess < secretNum) {
    renderGuess(div, lastGuess)
  }
}

function renderWin (div) {
  messageEl.textContent = "We have a winner!"
  messageEl.className = "winner"
  guessesEl.appendChild(div)
  div.className = "winner"
  if  (guessList.length === 1) {
    messageEl.textContent = "You found the number in one guess!!!"
  } else {
    messageEl.textContent = `Congratulations! You found the number ${secretNum} in ${guessList.length} guesses!`
  }
}

function renderGuess(div, lastGuess) {
  if (lastGuess < secretNum) {
    messageEl.className = "low"
    div.className = "low"
    messageEl.textContent = `${lastGuess} is too low. Try again!`
  } else if (lastGuess > secretNum) {
    messageEl.className = "high"
    div.className = "high"
    messageEl.textContent = `${lastGuess} is too high. Try again!`
  }
  guessesEl.appendChild(div)

}
