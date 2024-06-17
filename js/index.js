//Reset Button
document.querySelector('.reset_btn').addEventListener('click', function(){
   location.reload();
})

//Guess Button
document.querySelector('.guess_btn').addEventListener('click', function(){
    makeGuess();
})

let score = 10;
let highscore;
let number = Math.floor(Math.random() * 100) + 1;
let gameover = false;
//console.log(number);
const health = document.getElementsByClassName("heart");

//functions to manage the highscore display and local Storage
function checkHighscore(){
    if(localStorage.getItem("highscore") === null){
        highscore = 0;
        localStorage.setItem("highscore" , highscore);
    }
    else{
        highscore = localStorage.getItem("highscore");
        updateHighscore();
    }
}
function updateHighscore(){
    if(highscore < score){
        localStorage.setItem("highscore", score);
        document.querySelector(".highscore").innerHTML = score;
    }
}

function updateMessage(str){
    document.querySelector(".message").textContent = str;
}

function makeGuess(){
    if(gameover){
        return;
    }
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        updateMessage("Please input a number")
    } else if(guess == number){
        gameover = true;
        document.querySelector(".number").style.backgroundColor = 'var(--color4)';
        document.querySelector(".above_display").style.borderBottom = "10px solid var(--color4)"
        updateMessage("Correct Number!")
        updateHighscore();
        document.querySelector(".number").innerHTML = number;
    } else if(guess > number){
        health[--score].src = "./images/heart_black.png";
        updateMessage("Number too Large")
    } else if(guess < number){
        health[--score].src = "./images/heart_black.png";
        updateMessage("Number too Small")
    }
}

checkHighscore();