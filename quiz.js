function checkAnswer(onSuccess, onError) {
    correctAnswer = "4";
    userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    if (userAnswer === correctAnswer) {
        feedback = document.getElementById("feedback");
        feedback.textContent = "Correct! Well done!";
        onSuccess(); // Success callback
    } else {
        feedback.textContent = "Incorrect. Try again.";
        onError(); // Error callback
    }
}

submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", () => {
    checkAnswer(
        () => {
            // Success callback
            console.log("Correct answer - additional actions can go here");
            // Example: enable next button, play success sound, etc.
        },
        () => {
            // Error callback  
            console.log("Wrong answer - additional actions can go here");
            // Example: shake animation, play error sound, etc.
        }
    );
});