var gScore, cScore, aPlayer, isActive;
newGame()

document.querySelector('.btn--roll').addEventListener('click', function () {
    if (isActive) {
        var dice1, dice2;
        dice1 = Math.floor(Math.random() * 6) + 1
        dice2 = Math.floor(Math.random() * 6) + 1

        document.querySelector('.dice').style.display = 'block'
        document.querySelector('.dice--1').src = "dice-" + dice1 + ".png"
        document.querySelector('.dice--2').src = "dice-" + dice2 + ".png"

        if (dice1 === 1 && dice2 === 1) {
            resetScore()
        }
        else if (dice1 === 1 || dice2 === 1) {
            cScore = 0
            nextPlayer()
        }
        else if (dice1 === 6 && dice2 === 6) {
            cScore += 50
            document.getElementById('current--' + aPlayer).textContent = cScore
        }
        else {
            cScore += dice1 + dice2
            document.getElementById('current--' + aPlayer).textContent = cScore
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (isActive) {
        gScore[aPlayer] += cScore

        var gameScore = document.querySelector('.final-score').value
        var finalScore

        if (gameScore) {
            finalScore = gameScore
        }
        else {
            finalScore = 500
        }


        if (gScore[aPlayer] >= finalScore) {
            document.getElementById('score--' + aPlayer).textContent = gScore[aPlayer]
            document.getElementById('current--' + aPlayer).textContent = '0'
            document.getElementById('name--' + aPlayer).textContent = 'WINNER!'
            document.querySelector('.player--' + aPlayer).classList.remove('player--active')
            document.querySelector('.player--' + aPlayer).classList.add('player--winner')
            isActive = false
        }
        else {
            document.getElementById('score--' + aPlayer).textContent = gScore[aPlayer]
            cScore = 0
            nextPlayer()
        }
    }
})

document.querySelector('.btn--new').addEventListener('click', newGame)

function nextPlayer() {
    aPlayer === 0 ? aPlayer = 1 : aPlayer = 0

    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
}

function resetScore() {
    if (gScore[aPlayer] <= 30) {
        gScore[aPlayer] = 0
        cScore = 0
        document.getElementById('score--' + aPlayer).textContent = gScore[aPlayer]
        nextPlayer()
    }
    else {
        gScore[aPlayer] -= 30
        document.getElementById('score--' + aPlayer).textContent = gScore[aPlayer]
        nextPlayer()
    }
}

function newGame() {

    gScore = [0, 0];
    cScore = 0;
    aPlayer = 0;
    isActive = true

    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score--0').textContent = '0'
    document.getElementById('score--1').textContent = '0'
    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.add('player--active')
    document.getElementById('name--0').textContent = 'PLAYER 1'
    document.getElementById('name--1').textContent = 'PLAYER 2'
}

