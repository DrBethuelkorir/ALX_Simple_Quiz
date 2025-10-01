function add(number1,number2) {
    return number1 + number2;
}
function subtract(number1,number2) {
    return number1 - number2;
}   
function multiply(number1,number2) {
    return number1 * number2;
}   
function divide(number1,number2) {
    if (number2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return number1 / number2;
}
document.getElementById("add").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = add(num1, num2);
    document.getElementById("calculation-result").textContent = "Result: " + result;
}   );
document.getElementById("subtract").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = subtract(num1, num2);
    document.getElementById("calculation-result").textContent = "Result: " + result;
}   );
document.getElementById("multiply").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = multiply(num1, num2);
    document.getElementById("calculation-result").textContent = "Result: " + result;
}   );
document.getElementById("divide").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);      
    try {
        const result = divide(num1, num2);
        document.getElementById("calculation-result").textContent = "Result: " + result;
    } catch (error) {   
        document.getElementById("calculation-result").textContent = error.message;
    }   
}   );  