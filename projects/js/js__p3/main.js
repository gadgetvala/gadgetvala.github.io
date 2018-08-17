////////////////////////////////////////
// Varable Declaration
var p1score, p2score, winScore;
var player1 = {
    name: document.getElementById('player__1'),
    scoreBar: document.getElementById('player__1--score'),
    current: document.getElementById('player__1--current'),
    playerBox: document.getElementById('ply1')
};

var player2 = {
    name: document.getElementById('player__2'),
    scoreBar: document.getElementById('player__2--score'),
    current: document.getElementById('player__2--current'),
    playerBox: document.getElementById('ply2')
};
var playerScore;
var dice = document.querySelector('.dice__img');
var activePlayer = 'PLAYER 1';
var btnRoll = document.getElementById('btn-roll');
var btnAdd = document.getElementById('btn-add');
var reset = document.querySelector('.heading');
init();
////////////////////////////////
/// Logics
function flip(activePlayer) {
    if(activePlayer === 'PLAYER 1') {
        return 'PLAYER 2'
    } else {
        return 'PLAYER 1';
    }
}

function init() {
    p1score = 0;
    p2score = 0;
    playerScore = 0;
    winScore = prompt('Please set the win score');
    player1.name.textContent = 'PLAYER 1';
    player1.playerBox.classList.remove('winner');
    
    player2.name.textContent = 'PLAYER 2';
    player2.playerBox.classList.remove('winner');
    
    btnRoll.style.display = 'inline-grid';
    btnAdd.style.display = 'inline-grid';

    update();
    currentScore(activePlayer);
    activePlayer = flip(activePlayer);
}

function update() {
    player1.scoreBar.textContent = p1score;
    player2.scoreBar.textContent = p2score;
}

function currentScore(activePlayer) {
    if(activePlayer === 'PLAYER 1') {
        player1.current.textContent = playerScore; 
    } else {
        player2.current.textContent = playerScore;
    }
}


function addScore() {
    if(activePlayer === 'PLAYER 1') {
        p1score += playerScore;
        playerScore = 0;
        update();
    } else if (activePlayer === 'PLAYER 2') {
        p2score += playerScore;
        playerScore = 0;
        update();
    }
    winner();
    
}

function roll() {
    var random = Math.floor((1 + Math.random()*6));
    dice.src = 'img/dice-' + random+ '.svg';
    playerScore += random;
    currentScore(activePlayer);
    if(random === 1) {
        playerScore = 0;
        currentScore(activePlayer);
        activePlayer = flip(activePlayer);
    }   
}

function winner() {
    if(p1score >= winScore) {
        player1.name.textContent = 'PLAYER 1 WINNER!';
        player1.playerBox.classList.add('winner');
        
        btnRoll.style.display = 'none';
        btnAdd.style.display = 'none';
    } else if(p2score >= winScore) {
        player2.name.textContent = 'PLAYER 2 WINNER!';
        player2.playerBox.classList.add('winner');
        
        btnRoll.style.display = 'none';
        btnAdd.style.display = 'none';
    } else if(p1score >= winScore && p2score >= winScore && p1score === p2score) {
        player1.name.textContent = 'Match draw';
        player2.name.textContent = 'Match draw';
    } 
}

//////////////////////////////////////
// Implementsation

btnRoll.addEventListener('click', roll);

btnAdd.addEventListener('click', addScore);

reset.addEventListener('click', init);


