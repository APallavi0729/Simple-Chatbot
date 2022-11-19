function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hii") {
        return "Hlw people!";
    } else if (input == "i've some problem") {
        return "Okay! ask?";
    } else {
        return "Try asking something else!";
    }
}