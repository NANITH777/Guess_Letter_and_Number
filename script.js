'use strict';

let secretnumber = Math.floor(Math.random() * 51);

let score=20;
let highscore = 0;
document.querySelector('.score').textContent=score;

document.querySelector('.check').addEventListener(
    'click', function(){
       const guess = Number(document.querySelector('.guess').value);

       console.log(guess, typeof guess);

       if(guess === null || guess === undefined)
       {
        document.querySelector('.message').textContent='⛔ No Number!';
        score--;
        document.querySelector('.score').textContent=score;
       }

       else if (secretnumber === guess)
       {
        document.querySelector('.message').textContent='🎉 Correct Number!';

        document.querySelector('body').style.backgroundColor = '#0910db';
        document.querySelector('.number').style.width='25rem';
        document.querySelector('.number').textContent = secretnumber;

        if (score > highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
       }
       else if (guess > secretnumber)
       {
        if(score>1)
        {
            document.querySelector('.message').textContent='📈 Too High!';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;
        }
        
       }
       else if (guess < secretnumber)
       {
        if(score>1)
        {
            document.querySelector('.message').textContent='📉 Too Low!';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;
        }
       
       }
    }
)

document.querySelector('.again').addEventListener(
    'click', function()
    {
        secretnumber = Math.trunc(Math.random() * 20) + 1;
        score=20;
        document.querySelector('body').style.backgroundColor = '#75636d';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
    }
)