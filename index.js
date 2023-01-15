const choices=["rock","paper","scissors","lizard","spock"] //all choices




//get points value from session storage so that even if user reloads the page points are intact
const points=parseInt(sessionStorage.getItem("points"))
if(points>0){
    document.getElementById("points").textContent=points
}



//border colors according to the icons
const borderColor={
    "rock":"hsl(349, 71%, 52%)",
    "paper":"hsl(230, 89%, 62%)",
    "scissors":"hsl(39, 89%, 49%)",
    "lizard":"hsl(261, 73%, 60%)",
    "spock":"hsl(189, 59%, 53%)"
}


//box-shadow color WRT icons
const shadowColor={
    "rock":"hsl(349, 70%, 56%)",
    "paper":" hsl(230, 89%, 65%)",
    "scissors":"hsl(40, 84%, 53%)",
    "lizard":"hsl(261, 72%, 63%)",
    "spock":"hsl(189, 58%, 57%)"
}



//computer selected icon
const getRandomChoice=()=>{
    const computerChoice=choices[Math.floor(Math.random()*choices.length)]
    const computer=document.getElementById("computer")
    computer.src=`./images/icon-${computerChoice}.svg`
    document.getElementById("computer-div").style.display="block"
    document.getElementById("computer-div").style.borderColor=`${borderColor[computerChoice]}`
    if (window.matchMedia("(max-width:500px)").matches){
        document.getElementById("computer-div").style.boxShadow=`3px 6px ${shadowColor[computerChoice]}`
    }else{
        document.getElementById("computer-div").style.boxShadow=`5px 10px ${shadowColor[computerChoice]}`
    }
    
    return computerChoice;
}



//when the user clicks on the icon
const OnClickChoice=(choice)=>{
    document.getElementById("player").src=`./images/icon-${choice}.svg`; //setting icon image wrt icon 
    document.getElementById("player-div").style.borderColor=`${borderColor[choice]}`
    if(window.matchMedia("(max-width:500px)").matches){
        document.getElementById("player-div").style.boxShadow=`3px 6px ${shadowColor[choice]}`
    }else{
        document.getElementById("player-div").style.boxShadow=`5px 10px ${shadowColor[choice]}`
    }
   
    document.getElementById("icon-container").style.display="none";
    document.getElementById("chosen-container").style.display="flex";
    document.getElementById("result-container").style.display="block"
    document.getElementById("rules").style.marginTop="20%";
    if(window.matchMedia("(min-width:1000px)").matches){
        document.getElementById("rules").style.marginTop="2%";
    }
}


const onWin=()=>{
    let curr=parseInt(document.getElementById("points").textContent);
    document.getElementById("points").textContent=curr+1
   document.getElementById("result-heading").textContent="YOU WIN";
  sessionStorage.setItem("points",`${document.getElementById("points").textContent}`)
}

const onLose=()=>{
    let curr=parseInt(document.getElementById("points").textContent);
    document.getElementById("points").innerText=curr-1
    document.getElementById("result-heading").textContent="YOU LOSE";
   sessionStorage.setItem("points",`${document.getElementById("points").textContent}`)
}



//Player Choices
const rockClick=()=>{
    OnClickChoice("rock");
    setTimeout(()=>{
        const computerChoice=getRandomChoice()
        if (computerChoice==="scissors" || computerChoice==="lizard"){  
            onWin();   
        }else if(computerChoice==="paper" || computerChoice==="spock"){
            onLose();
        }else{
            document.getElementById("result-heading").textContent=""
        }
    },0);
    
}


const paperClick=()=>{
    OnClickChoice("paper");
    setTimeout(()=>{
        const computerChoice=getRandomChoice();
        if(computerChoice==="rock" || computerChoice==="spock"){
            onWin();

        }else if (computerChoice==="scissors" || computerChoice==="lizard"){
            onLose();
        }else{
            document.getElementById("result-heading").textContent=""
        }
    },0)
    }



const scissorsClick=()=>{
    OnClickChoice("scissors");
    setTimeout(()=>{
        const computerChoice=getRandomChoice();
        if(computerChoice==="paper" || computerChoice==="lizard"){
            onWin();
        }else if(computerChoice==="rock" || computerChoice==="spock"){
            onLose();
        }else{
            document.getElementById("result-heading").textContent=""
        }
    },0)
}



const lizardClick=()=>{
    OnClickChoice("lizard");
    setTimeout(()=>{
        const computerChoice=getRandomChoice();
        if(computerChoice==="spock" || computerChoice==="paper"){
            onWin();
        }else if(computerChoice==="rock" || computerChoice==="scissors"){
            onLose();
        }else{
            document.getElementById("result-heading").textContent=""
        }
    })
}


const spockClick=()=>{
    OnClickChoice("spock");
    setTimeout(()=>{
        const computerChoice=getRandomChoice();
        if(computerChoice==="scissors" || computerChoice==="rock"){
            onWin();
        }else if(computerChoice==="lizard" || computerChoice=="paper"){
            onLose();
        }else{
            document.getElementById("result-heading").textContent=""
        }
    })
}


//PLAY AGAIN
const play=()=>{
    document.getElementById("result-container").style.display="none";
    document.getElementById("chosen-container").style.display="none";
    document.getElementById("icon-container").style.display="block";
    if(window.matchMedia("(max-width:500px)").matches){
        document.getElementById("rules").style.marginTop="120%";
    }else if(window.matchMedia("(min-width:1000px)").matches){
        document.getElementById("rules").style.marginTop="2%";
    }else{
        document.getElementById("rules").style.marginTop="30%";
    }
}

