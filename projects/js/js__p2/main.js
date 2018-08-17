var UIController = (function() {
// Declare wepons     
    var wepons = [ 'Stone', 'Paper', 'Scissors' ];
    var UIwepons = [ document.getElementById('wepon__1'),
                   document.getElementById('wepon__2'),
                   document.getElementById('wepon__3'), ];
    var humanSelect, computerSelect, computerSelectValue, computerWinText, humanWinText
        humanScore = 0, computerScore = 0, winningScore = 5;
    var humanScoreUpdate = document.querySelector('.p1__score'), 
        computerScoreUpdate = document.querySelector('.p2__score');
        humanScoreUpdate.textContent = humanScore;
        computerScoreUpdate.textContent = computerScore;
    var scorePrint = document.getElementById('wepon__text--2');
    computerWinText = document.getElementById('wepon__text--3');
    humanWinText = document.getElementById('wepon__text--1');

// initFunction

    function init() {

        humanScore = 0; 
        computerScore = 0; 
        humanScoreUpdate.textContent = humanScore;
        computerScoreUpdate.textContent = computerScore;
        if(!winningScore) {
            winningScore = 5;
        }
        document.querySelector('.player_1').textContent = 'HUMAN';
        document.querySelector('.player_2').textContent = 'COMPUTER';
    }


// Set winningScore

    function winningScoreSetter() {
        winningScore = document.getElementById('winner__score').value;
        init();
    }

    document.querySelector('.btn').addEventListener('click', winningScoreSetter);

// Get computerinputs 
    var computerInput = function() {
        computerSelectValue = Math.round(Math.random()*2);
        computerSelect =  wepons[computerSelectValue];
        scorePrint.textContent = 'Computer selected ' + computerSelect;
        winnerFunction();
    }

// Get Human Inputs
    UIwepons[0].addEventListener('click', function() { humanInput(0);});                
    UIwepons[1].addEventListener('click', function() { humanInput(1);});               
    UIwepons[2].addEventListener('click', function() { humanInput(2);});               
    var humanInput = function(x) {
        humanSelect = x;
        computerInput();
    }

// WinnerFunction    
    var winnerFunction = function() {

        humanWinText.textContent = '';
        computerWinText.textContent = '';

        if ( computerSelectValue  === 0 ) {
            if (humanSelect === 1) { humanWinText.textContent = 'Human won the game'; humanScore += 1; }
            if (humanSelect === 2) { computerWinText.textContent = 'Computer won the game'; computerScore += 1; }  
        }

        if ( computerSelectValue === 1 ) {
            if (humanSelect === 2) { humanWinText.textContent = 'Human won the game'; humanScore += 1; }
            if (humanSelect === 0) { computerWinText.textContent = 'Computer won the game'; computerScore += 1; }
        }

        if ( computerSelectValue === 2 ) {
            if (humanSelect === 0) { humanWinText.textContent = 'Human won the game'; humanScore += 1; }
            if (humanSelect === 1) { computerWinText.textContent = 'Computer won the game'; computerScore += 1; }
        }

        if ( computerSelectValue === humanSelect ) {
            
            humanWinText.textContent = 'The match is Tie!';
            computerWinText.textContent = 'The match is Tie!';

        }

        humanScoreUpdate.textContent = humanScore;
        computerScoreUpdate.textContent = computerScore;

        if( document.querySelector('.player_1').textContent === 'HUMAN WON!' || 
            document.querySelector('.player_2').textContent === 'COMPUTER WON!' ) {
                init();
            }

        if ( humanScore >= winningScore && humanScore > computerScore) {
            document.querySelector('.player_1').textContent = 'HUMAN WON!';
        }

        if ( computerScore >= winningScore && computerScore > humanScore ) {
            document.querySelector('.player_2').textContent = 'COMPUTER WON!';
        }
    }

// InitFunction


})();
