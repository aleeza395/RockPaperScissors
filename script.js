let turns = document.querySelectorAll(".turns");
let options = document.querySelectorAll(".options");
let turnsBox = document.querySelector(".turns-box");
let optBox = document.querySelector(".container");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let user = document.querySelector(".user");
let comp = document.querySelector(".computer");
let msg = document.querySelector("#msg");
let result = document.querySelector("#result");
let newBtn = document.querySelector("#newgame");

let cScore = 0;
let uScore = 0;

let randomChoice = () => {
    let optArr = ["rock", "paper", "scissors"];
    let choice = optArr[Math.floor(Math.random()*3)];
    return choice;
}

let draw = () => {
    user.style.display = "none";
    comp.style.display = "none";
    msg.style.display = "block";
    msg.innerHTML = "It´s a draw!";
}

let notDraw = () => {
    user.style.display = "block";
    comp.style.display = "block";
    msg.style.display = "none";
}

let number = 1;

let leftTurns = () => {
    for (i=0; i<turns.length; i++) {
        if (turns[i].style.display !== "none") {
            turns[i].style.display = "none";
            number++;
            break;
        }
    }
}

let play = (userChoice) => {
    let compChoice = randomChoice();
    if (userChoice == "rock") {
        if (compChoice == "rock") {
            draw();
        } else if (compChoice == "paper") {
            notDraw();
            cScore++;
            compScore.innerHTML = cScore;
        } else {
            notDraw();
            uScore++;
            userScore.innerHTML = uScore;
        }
    } else if (userChoice == "paper") {
        if (compChoice == "rock") {
            notDraw();
            uScore++;
            userScore.innerHTML = uScore;
        } else if (compChoice == "paper") {
            draw();
        } else {
            notDraw();
            cScore++;
            compScore.innerHTML = cScore;
        }
    } else {
        if (compChoice == "rock") {
            notDraw();
            cScore++;
            compScore.innerHTML = cScore;
        } else if (compChoice == "paper") {
            notDraw();
            uScore++;
            userScore.innerHTML = uScore;
        } else {
            draw();
        }
    }
    leftTurns();
    if (number > 3) {
        turnsBox.style.display = "none";
        optBox.style.display = "none";
        result.style.display = "block";
        if (uScore == cScore) {
            result.innerHTML = "Tie!"
        } else if (uScore > cScore) {
            result.innerHTML = "Congratulations! You won"
        } else if (uScore < cScore) {
            result.innerHTML = "You lost"
        }
        newBtn.style.display = "block";
    }
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        let userChoice = option.getAttribute("id");
        play(userChoice);
    })
})

newBtn.addEventListener("click", () => {
    cScore = 0;
    uScore = 0;
    number = 1;

    userScore.innerHTML = uScore;
    compScore.innerHTML = cScore;

    turns.forEach((turn) => {
        turn.style.display = "block";
    })

    result.style.display = "none";
    newBtn.style.display = "none";
    turnsBox.style.display = "flex";
    optBox.style.display = "flex";
})
