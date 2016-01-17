////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === "rock" || move === "paper" || move === "scissors")
    return move;
    else getInput();
  }
function getComputerMove(move) {
    if (move === "rock" || move === "paper" || move === "scissors")
    return move;
    else randomPlay();
}

function getWinner(playerMove,computerMove) {
switch (playerMove) {
     case "rock":
         if (computerMove == "scissors") {
             winner = "You win!";
             return winner;
         }
         else if (computerMove == "paper") {
             winner = "I win!";
             return winner;
         }
         else {
             winner = "It's a tie.";
             return winner;
         }
         break;
     case "paper":
         if (computerMove == "rock") {
             winner = "You win!";
             return winner;
         }
         else if (computerMove == "scissors") {
             winner = "I win!";
             return winner;
         }
         else {
             winner = "It's a tie.";
             return winner;
         }
         break;
     case "scissors":
         if (computerMove == "rock") {
             winner = "I win!";
             return winner;
         }
         else if (computerMove == "paper") {
             winner = "You win!";
             return winner;
         }
         else {
             winner = "It's a tie.";
             return winner;
         }
         break;
     default:
         winner = "error";
         return winner;
      }
};

function playToFive() {
    console.log ("Let's play Rock, Paper, Scissors!!!");

               var playerWins = 0;

               var computerWins = 0;



               var playerMove = "";

               var computerMove = "";

               var winner = "";


               while (playerWins < 5 && computerWins < 5) {

                   playerMove = getPlayerMove(getInput());

                   computerMove = getComputerMove(randomPlay());

                   winner = getWinner(playerMove, computerMove);


                   if (winner == "player") {

                       playerWins++;

                   }


                   else if (winner == "computer") {

                       computerWins++;

                   }
                   else {
            console.log ("You chose to quit!");
            break;
        }
                   console.log ("Player: " + playerMove + " and ");

                   console.log ("Computer: " + computerMove + ". ");

                   console.log ("The score is " + playerWins + " for player" + " and " + computerWins + " for computer." + '</br>');

               }

               return [playerWins, computerWins];
  }
