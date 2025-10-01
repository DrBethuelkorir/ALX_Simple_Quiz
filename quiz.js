// Function Declaration
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";
    
    // Retrieve the User's Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Compare the User's Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        // If correct, display success message
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // If incorrect, display error message
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add an Event Listener to the Submit Button
const submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);