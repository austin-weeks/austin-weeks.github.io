const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const infoBtn = document.getElementById("info-btn");
const infoFooter = document.querySelector("footer");
const closeInfoBtn = document.getElementById("footer-close-btn");

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        onInput();
    }
});
checkBtn.addEventListener("click", onInput);
clearBtn.addEventListener("click", () => {
    results.innerHTML = "";
});

infoBtn.addEventListener("click", () => {
    infoBtn.classList.toggle("hidden");
    infoFooter.classList.toggle("hidden");
});

closeInfoBtn.addEventListener("click", () => {
    infoBtn.classList.toggle("hidden");
    infoFooter.classList.toggle("hidden");
    console.log("closebtn!");
});

function onInput() {
    if (input.value === "") {
        alert("Please provide a phone number");
        return;
    }
    const inputNumber = input.value
    displayResult(isValidNew(inputNumber), inputNumber);
    resetInput(); 
}
function resetInput() {
    input.value = "";
}

//Number must pass a series of checks.
function isValidNew(inputNumber) {
    const numsRegex = /[^\d]/gi;
    const justNums = inputNumber.replace(numsRegex, "");
    const validNOCountryCode = 10;
    const validCountryCode = 11;
    const rawNumsLength = justNums.length;


    //Preliminary check for pure number length.
    if (rawNumsLength !== validNOCountryCode && rawNumsLength !== validCountryCode) return false;
    if (rawNumsLength === validCountryCode) {
        if (justNums[0] !== "1") return false;
    }

    //Formatting checks.
    const validCharsRegex = /[^()-\d]/gi;
    const numsAndChars = inputNumber.replace(validCharsRegex, "");
    const containsParenthesis = numsAndChars.search(/[()]/gi) !== -1;
    //Hyphen checking.
    if (numsAndChars.includes("-")){
        if (numsAndChars[0] === "-") return false;
        if (containsParenthesis) {
            if (rawNumsLength === validNOCountryCode) {
                if (numsAndChars[8] !== "-") return false;
            }
            else {
                if (numsAndChars[9] !== "-") return false;
            }
        }
        else {
            if (rawNumsLength === validNOCountryCode) {
                if (numsAndChars[3] !== "-" || numsAndChars[7] !== "-") return false;
            }
            else {
                if (numsAndChars[4] !== "-" || numsAndChars[8] !== "-") return false;
            }
        }
    }
    //Parenthesis checking.
    if (containsParenthesis) {
        if (rawNumsLength === validNOCountryCode) {
            if (numsAndChars[0] !== "(" || numsAndChars[4] !== ")") return false;
        }
        else {
            if (numsAndChars[1] !== "(" || numsAndChars[5] !== ")") return false;
        }
    }

    //Passed all checks!
    return true;
}

function displayResult(isValid, inputNumber) {
    results.classList.remove("hidden");
    results.innerHTML += isValid ? `Valid US Number: ${inputNumber}<br>`
        : `Invalid US Number: ${inputNumber}<br>`;
}