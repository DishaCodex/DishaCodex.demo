let count = 1;

const numberDisplay = document.getElementById("number");
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    count++;
    numberDisplay.textContent = count;
});