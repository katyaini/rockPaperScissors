

// prompting for player's choice and storing the response in a variable playerChoice
//var playerChoice = prompt("Enter your choice of either rock, paper or scissors: ").toLowerCase();
// function to generate a random choice out of the array options

function getComputerChoice() {
    var options = ["rock","paper","scissors"];
    var choice = options[Math.floor(Math.random() * (options.length ))];
    return choice;
}
     var result;
     var tie = 0;
     var userPoints = 0;
     var computerPoints = 0;

//computerSelection = getComputerChoice();
//var computerSelection = getComputerChoice();
//console.log(computerSelection);
game();


//game(playRound);
//computerWins = true ? console.log("Computer Wins!") : console.log("you win!")





// function that takes 2 paraments- a being players choice and b, computer's choice
//compare both results 
// if player choice rock and computer choice paper = player wins else computer wins
//if player choice paper and computer choice rock = player wins else computer wins
//if player choice scissors and computer choice paper = player wins else computer wins


function playRound(a,b) {
       

        if ((a === "rock") && (b === "paper")) {
            computerPoints++
            result = "Score: " + computerPoints +  " " + "computer wins! paper beats rock!";
        
            return result;
            //return computerPoints++;
           }
        else if( (a === "rock") && (b === "scissors")) {
             
            result = "you win! rock beat scissors!";
            userPoints++;
            return "Score: " + userPoints + " " + result;
            
          }
        else if ((a === "paper") && (b === "rock")) {
          
        
            result = "you win! paper beats rock!";
            userPoints++;
            return  "Score: " + userPoints + " " + result;
            
        }
            
          
        else if ((a === "paper") && (b === "scissors")) {
            result = "computer wins! scissors beats paper";
            computerPoints++;
            
            return "Score: " + computerPoints + " " + result;
           

          }
          
          
        
        else if ((a === "scissors") && (b === "rock")) {
          
            result = "computer wins! rock beats scissors!";
            computerPoints++;
            return "Score: " + computerPoints + " " + result;
           
          }
        else if ((a === "scissors") && (b === "paper")) {
     
            result = " you win! scissors beats paper!";
            userPoints++
            return "Score: " + userPoints + " " + result;
           

        }
            
            
        
      else {
          result = "tie";
          tie++
          return "Score: " + tie + " " + result;
         

        }
    }
    function game() {
     

      for (var i = 0; i < 5; i++){
        var computerSelection = getComputerChoice();
        var playerChoice = prompt("Enter your choice of either rock, paper or scissors: ").toLowerCase();

        console.log(playRound(playerChoice,computerSelection));

        
      

      }
      if(computerPoints > userPoints) {
        console.log("Compuer Wins! It had to happen one day.");
      }
      
      else if (userPoints > computerPoints) {
        console.log("You win you crazy animal!!");
      }
      else{
        console.log("Well, you have tied with the machine!")
      }
      
    
        
      
    }
  
          
       
      
    
   
  //function game() calls function playRound
  //iterates 5 times for the function playRound
  //we need to return something from each round of playround that indicates the winner
  //
