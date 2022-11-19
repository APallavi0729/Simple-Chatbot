function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // some questions responses
    if(input== "hii"){
        return "hlw people";
    }else if(input== "i've suffer from some problem"){
        return "Okay! ask?";
    }else{
        return "try something else";
    }

}
