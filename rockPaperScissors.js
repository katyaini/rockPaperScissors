

// prompting for player's choice and storing the response in a variable playerChoice
var playerChoice = prompt("Enter your choice of either rock, paper or scissors: ").toLowerCase();
// function to generate a random choice out of the array options

function getComputerChoice() {
    var options = ["rock","paper","scissors"];
    var choice = options[Math.floor(Math.random() * (options.length ))];
    return choice;
}

var computerSelection = getComputerChoice();
console.log(computerSelection);
console.log (playRound(playerChoice, computerSelection));




// function that takes 2 paraments- a being players choice and b, computer's choice
//compare both results 
// if player choice rock and computer choice paper = player wins else computer wins
//if player choice paper and computer choice rock = player wins else computer wins
//if player choice scissors and computer choice paper = player wins else computer wins


function playRound(a,b) {
       var result 
    
    
        if (a === "rock") {
          (b === "paper") ? result = "computer wins! paper beats rock!" : result = "you win! rocks beat scissors!";
          return result;
        }
        else if (a === "paper") {
          (b === "rock") ? result = "you win! paper beats rock!": result = "computer wins! scissors beats paper";
          return result;
        }
        else {
          (b === "rock") ? result = "computer wins! rock beats scissors!": result = " you win! scissors beats paper!";
          return result;
        }
    }   


    

        
    
        
   
