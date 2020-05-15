let choices = document.querySelectorAll('.player-choice');
let score = document.getElementById('score');
const scoreboard = {
    player: 0,
    computer: 0
}

function play(e) {
    const myHand = e.target.id;
    const compHand = giveCompHand();
    const ourWinner = theWinner(myHand, compHand);
    Swal.fire('computer chose ' + compHand, ourWinner, 'success');
}

function theWinner(my, comp) {
    if (my === comp) {
        return 'draw';
    } else if (my === 'rock') {
        if (comp === 'paper') {
            walletBalance -= 10;
            return `Computer wins and takes $10. Balance:${walletBalance}`;
        } else {
            walletBalance += 10;
            return `You win + $10 Balance:${walletBalance}`;
        }
    } else if (my === 'paper') {
        if (comp === 'scissors') {
            walletBalance -= 10;
            return `Computer wins and takes $10. Balance:${walletBalance}`;
        } else {
            walletBalance += 10;
            return `You win + $10 Balance:${walletBalance}`;
        }
    } else if (my === 'scissors') {
        if (comp === 'rock') {
            walletBalance -= 10;
            return `Computer wins and takes $10. Balance:${walletBalance}`;
        } else {
            walletBalance += 10;
            return `You win + $10 Balance:${walletBalance}`;
        }
    }
}
if (walletBalance <= 100) {
    Swal.fire(`Balance is less than ${walletBalance}`);
} else if (walletBalance > 1500) {
    Swal.fire(`Balance is more than ${walletBalance}`);
}

function giveCompHand() {
    let compRandNum = Math.random() * (30 - 1) + 1;
    if (compRandNum > 1 && compRandNum <= 10) {
        return 'rock';
    } else if (compRandNum > 10 && compRandNum <= 20) {
        return 'paper';
    } else(compRandNum > 20 && compRandNum <= 30)
    return 'scissors';
}

choices.forEach(choice => choice.addEventListener('click', play));

let currentRate;
const minimumBet = 100;
let walletBalance = 1000;

function extraReveal() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function revealInstruct() {
    let x = document.getElementById("instructDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//ai music and avatar and style change
function changeMusic() {
    let x = document.getElementById("myMusic").value;
    if (x === "First") {
        document.querySelector("audio").src = "audio/asit.wav";
        document.querySelector(".comp-prof-pic").src = "images/eddy.png";
        // let eddy = document.querySelector(".comp-prof-pic").src = "images/eddy.png";

    } else if (x === "Second") {
        document.querySelector("audio").src = "audio/chill.wav";
        document.querySelector(".comp-prof-pic").src = "images/t800.jpg";
        // let t800 = document.querySelector(".comp-prof-pic").src = "images/t800.jpg";
    } else if (x === "Third") {
        document.querySelector("audio").src = "audio/lil.wav";
        document.querySelector(".comp-prof-pic").src = "images/frog.jpeg";
    } else if (x === "Fourth") {
        document.querySelector("audio").src = "audio/metroboomin.wav";
        document.querySelector(".comp-prof-pic").src = "images/gman.jpeg";
    }
}
let betRateText;

function betRateOne() {
    currentRate = 1;
    document.getElementsByClassName(".current-rate").innerHTML = `Your current rate is: ${currentRate}`;
}

function betRateTwo() {
    currentRate = 2;
    document.getElementsByClassName(".current-rate").innerHTML = `Your current rate is: ${currentRate}`;
}

function betRateThree() {
    currentRate = 3;
    document.getElementsByClassName(".current-rate").innerHTML = `Your current rate is: ${currentRate}`;
}
/* input choice remove later #criticism 5 
function changeHand() {
    let y = document.querySelector(".player-choices").value;
    if (y === "rockHand") {
        document.querySelector(".player-img").src = "images/rock.png";
        myHand = "rock";
    } else if (y === "paperHand") {
        document.querySelector(".player-img").src = "images/paper.png";
        myHand = "paper";
    } else if (y === "scissorsHand") {
        document.querySelector(".player-img").src = "images/scissors.png";
        myHand = "scissors";
    }
}
*/

/**
 * revisit this code #12 and ask for criticism again
function genAndWin() {
    function giveCompHand() {
        if (compRandNum > 1 && compRandNum < 10) {
            compHand = "rock";
            document.querySelector(".comp-img").src = "images/rock.png";
        } else if (compRandNum > 10 && compRandNum < 20) {
            compHand = "paper";
            document.querySelector(".comp-img").src = "images/paper.png";
        } else if (compRandNum > 20 && compRandNum <= 30) {
            compHand = "scissors";
            document.querySelector(".comp-img").src = "images/scissors.png";
        }
    }
    if (myHand == compHand) {
        alert("draw");
    }
    giveCompHand();
}
 * */