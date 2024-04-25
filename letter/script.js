'use strict';

// generate random letter (uppercase)
let secretletter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

let score=10;
let highscore = 0;
document.querySelector('.score').textContent=score;

const displayMessage = function(message)
{
    document.querySelector('.message').textContent= message;
}

document.querySelector('.check').addEventListener(
    'click', function()
    {
        const guess = document.querySelector('.guess').value.toLowerCase();

       if(guess === '')
       {
            displayMessage('⛔ No Letter!');
            score--;
            document.querySelector('.score').textContent=score;
       }

       else if (guess === secretletter)
       {
            displayMessage('🎉 Correct Letter!');

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.letter').style.width='25rem';
            document.querySelector('.letter').textContent = secretletter;

            if (score > highscore)
            {
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
       }

       else if(guess !== secretletter)
       {
            if(score>1)
            {
                // Distance between letters
                const distance = Math.abs(guess.charCodeAt(0) - secretletter.charCodeAt(0));
    
                if (distance > 5) 
                { 
                    displayMessage(guess > secretletter ? '📈 Way too high!' : '📉 Way too low!');
                } 
                else 
                {
                    displayMessage(guess > secretletter ? '📈 Too high!' : '📉 Too low!');
                }

                score--;
                document.querySelector('.score').textContent = score;
            }

            else
            {
                displayMessage('💥 You lost the game!');
                document.querySelector('.score').textContent=0;
            }
       }
      
    }
)

document.querySelector('.again').addEventListener(
    'click', function()
    {
        secretletter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        score=10;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.letter').style.width='15rem';
        document.querySelector('.score').textContent = score;
        displayMessage('Start guessing...');
        document.querySelector('.letter').textContent='?';
        document.querySelector('.guess').value='';
    }
)