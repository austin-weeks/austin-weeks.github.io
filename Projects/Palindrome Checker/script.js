const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", handleInput);
textInput.addEventListener("keydown", event => {
    if (event.key === "Enter") handleInput();
});

function handleInput() {
    const originalInput = textInput.value;

    
    if (!originalInput) {
        alert("Please input a value");
        return;
    }
    const charsToRemove = /[\s._,-\/\\()]/g;
    const cleanedInput = originalInput.replace(charsToRemove, '').toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");
    console.log(cleanedInput + ", " + reversedInput);
    let isPalindrome = cleanedInput === reversedInput;


    displayResult(isPalindrome, originalInput);
    
    textInput.value = "";
}

function displayResult(isPalindrome, palindrome) {
    result.innerHTML = isPalindrome ? `<em>${palindrome}</em> is a palindrome` : `<em>${palindrome}</em> is not a palindrome`;

    result.classList.remove("hidden");
}