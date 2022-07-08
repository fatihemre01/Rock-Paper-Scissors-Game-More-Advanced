const rpsButtons = document.querySelectorAll(".rpsButton")
const playerScore = document.getElementById("player-score")
const playerchoiceDiv = document.getElementById("playerchoice")
const computerchoiceDiv = document.getElementById("computerchoice")
const result = document.getElementById("result")
const endGameButton = document.getElementById("endGameButton")

let score = 0

//generateing random choice for computer
function getComputerChoice() {
    let _random = Math.floor(Math.random() * rpsButtons.length)

    return rpsButtons[_random].value
}

//compare player and computer choice, manipulate DOM accordingly
function getResult(playerChoice, computerChoice) {

    if(playerChoice == "Rock" && computerChoice == "Scissors"){
        score += 1
        playerScore.innerText = score
        playerchoiceDiv.innerText = `${playerChoice}`
        computerchoiceDiv.innerText = `${computerChoice}`
        result.innerText = "You win!"
        
        
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock"){
        score += 1
        playerScore.innerText = score
        playerScore.innerText = score
        playerchoiceDiv.innerText = `${playerChoice}`
        computerchoiceDiv.innerText = `${computerChoice}`
        result.innerText = "You win!"

    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper"){
        score += 1
        playerScore.innerText = score
        playerchoiceDiv.innerText = `${playerChoice}`
        computerchoiceDiv.innerText = `${computerChoice}`
        result.innerText = "You win!"
    }
    else if(playerChoice == computerChoice){
        playerScore.innerText = score
        playerchoiceDiv.innerText = `${playerChoice}`
        computerchoiceDiv.innerText = `${computerChoice}`
        result.innerText = "It's draw"
    }
    else{
        score -= 1
        playerScore.innerText = score
        playerchoiceDiv.innerText = `${playerChoice}`
        computerchoiceDiv.innerText = `${computerChoice}`
        result.innerText = "You lose"
    }
}

//onclick event for RPS buttons and calling "get reseult()" function to find result. 
//(RPS = rock, paper, scissors)
rpsButtons.forEach(x => {
    x.onclick = () => getResult(x.value, getComputerChoice())
})


//does: clear the DOM's when red button clicked
function clearGame() {
    score = 0
    playerScore.innerText = ""
    playerchoiceDiv.innerText = ""
    computerchoiceDiv.innerText = ""
    result.innerText = ""

}

//red button click event
endGameButton.onclick = () => clearGame()