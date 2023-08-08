var playerText = $('#playerText')
var restartBtn = $('#restartBtn')
var boxes = Array.from($('.box'))

var winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

var x = {xText : "X", player: prompt("X : type your name")}
var o = {oText : "O", player: prompt("O : type your name")}
var currentPlayer = x.xText
var currentPlayersName = x.player
playerText.text(`${currentPlayersName}'s turn`)
var spaces = Array(9).fill(null)

function startGame(){
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    var id = e.target.id
    
    
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        
        
        if(playerHasWon() !== false){
            playerText.text(`${currentPlayersName} has won!`)
            var winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor = winnerIndicator)
            return
        }
        
        if(currentPlayer === x.xText){
            currentPlayer = o.oText
            currentPlayersName = o.player
            playerText.text(`${currentPlayersName}'s turn`)
        } else {
            currentPlayer = x.xText
            currentPlayersName = x.player
            playerText.text(`${currentPlayersName}'s turn`)
        }
    }
}

var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function playerHasWon() {
    for (var condition of winningCombos) {
        var [a, b, c] = condition
        
        if(spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
            boxes.forEach(box => box.removeEventListener('click', boxClicked))
            return [a, b, c]
        }
    }
    return false
}



function restart() {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    spaces.fill(null)
    
    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })
    
    playerText.text('Tic Tac Toe')
    currentPlayer = x.xText
    playerText.text(`${currentPlayersName}'s turn`)
    
}

restartBtn.click(() => restart())

startGame()