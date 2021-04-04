
var choice = ["R", "P", "S"];

var wins = 0;
var ties = 0;
var losses = 0;

var computerChoice = choice[Math.floor((Math.random()*choice.length))];

console.log(computerChoice);

function playGame() {
    var userChoice = window.prompt("Choose one: R, P or S");
    userChoice.toUpperCase();

    alert("The computer chose " + computerChoice + ".");

    if (userChoice == computerChoice) {
        alert("Tie");
        ties += 1;
        
    } else if (userChoice == "R" && computerChoice == "S") {
        alert("You win!");
        wins +=1;
        
    } else if (userChoice == "P" && computerChoice == "R") {
        alert("You win!");
        wins +=1;
        
    } else if (userChoice == "S" && computerChoice == "P") {
        alert ("You win!");
        wins +=1;
    }
    else {
        alert("You lose!");
        losses +=1;
        
    };

    alert("Stats \n Ties: " + ties + "\n Wins: " + wins + "\n Losses: " + losses);

    var playAgain = prompt("Do you want to play again? (Y or N)");
    playAgain.toUpperCase();

    if (playAgain == "Y") {
        playGame();
    } else {
        return;
    };

    return;
     
};

playGame();
