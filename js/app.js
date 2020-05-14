let balance = 1000;
let currentRate;
const minimumBet = 100;
let betAmount;


betAmount = document.querySelector('#betmoney').value;
if (betAmount < 100) {
    document.querySelector('#warning').innerHTML = "Less than $100";
}


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

function changeMusic() {
    let x = document.getElementById("myMusic").value;
    if (x === "First") {
        document.querySelector("audio").src = "audio/asit.wav";
    } else if (x === "Second") {
        document.querySelector("audio").src = "audio/chill.wav";
    } else if (x === "Third") {
        document.querySelector("audio").src = "audio/lil.wav";
    } else if (x === "Fourth") {
        document.querySelector("audio").src = "audio/metroboomin.wav";
    }

}

function betRateOne() {
    let buttonRateOne = document.querySelector("#1x");
    document.querySelector("h2").textContentL = "Your current bet rate: 1x";
}

function betRateTwo() {
    let buttonRateTwo = document.querySelector("#2x");
    document.querySelector("h2").textContent = "Your current bet rate: 2x";
}

function betRateThree() {
    let buttonRateThree = document.querySelector("#3x");
    document.querySelector("h2").textContent = "Your current bet rate: 3x";
}