const arr = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

playRound(humanScore,computerScore,computerChoice);

function getComputerChoice(){
    let x = arr[Math.floor(Math.random()*3)];
    return computerChoice=x;
}

function  getHumanChoice(){
    let answer = prompt("Please enter your choice (rock, paper, scissors): ");
    answer = answer.toLowerCase();
    let x= arr.length
    let y = 0
    for(let i=0;i<x;i++){
        arr_item=arr[i];
        if(arr_item==answer){
            y += 1;       
            if(y==1){
                return humanChoice=answer;
            }
        }
        else{
            return humanChoice="wrong";
        }
    }
}

function playRound(humanScore,computerScore){
    while(humanScore < 5 && computerScore < 5){
        getHumanChoice();
        getComputerChoice();

        console.log("Human choice: "+humanChoice);
        console.log("Computer choice: "+computerChoice);

        if(humanChoice=="wrong"){
            alert("Pleas type correct word (rock, paper, scissors).");
        }
        else{
            if(humanChoice==computerChoice){
                alert("No one win this round !"+getScore(humanScore,computerScore,computerChoice,humanChoice));
            }
            else{
                if(humanChoice=="rock"){
                    if(computerChoice=="paper"){
                        computerScore += 1;
                        alert("Computer win this round !"+getScore(humanScore,computerScore,computerChoice,humanChoice));
                    }
                    else{
                        humanScore +=1;
                        alert("You win !"+getScore(humanScore,computerScore,computerChoice,humanChoice));
                    }
                }
                else if(humanChoice=="paper"){
                    if(computerChoice=="rock"){
                        humanScore += 1;
                        alert("You win !"+getScore(humanScore,computerScore,computerChoice,humanChoice));
                    }
                    else{
                        computerScore += 1;
                        alert("Computer win this round !"+getScore(humanScore,computerScore,computerChoice,humanChoice));
                    }
                }
                else{
                    if(computerChoice=="rock"){
                        computerScore += 1;
                        alert("Computer win this round !"+getScore(humanScore,computerScore,computerChoice,humanChoice));
                    }
                    else{
                        humanScore += 1;
                        alert("You win !"+getScore(humanScore,computerScore,computerChoice,humanChoice));
                    }
                }
        
            }
        }     
        if(humanScore==5){
            alert("Human win."+getScore(humanScore,computerScore));
        }
        if(computerScore==5){
            alert("Computer win."+getScore(humanScore,computerScore));
        }
    }
}

function getScore(x,y,z,j){
    if(z && j){
        return "\n\nYour Choice: "+j+"\nComputer Choice: "+z+"\n\nYour Score: "+x+"\nComputer Score: "+y;    
    }
    else{
        return "\n\nYour Score: "+x+"\nComputer Score: "+y;
    }
}