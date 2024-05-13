const conversionsArray = [
    ["a", "2"],
    ["b", "2"],
    ["c", "2"],
    ["d", "3"],
    ["e", "3"],
    ["f", "3"],
    ["g", "4"],
    ["h", "4"],
    ["i", "4"],
    ["j", "5"],
    ["k", "5"],
    ["l", "5"],
    ["m", "6"],
    ["n", "6"],
    ["o", "6"],
    ["p", "7"],
    ["q", "7"],
    ["r", "7"],
    ["s", "7"],
    ["t", "8"],
    ["u", "8"],
    ["v", "8"],
    ["w", "9"],
    ["x", "9"],
    ["y", "9"],
    ["Z", "9"]
];

const formatOutput = true;

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
    const number = input.value
    isValid(number);
    resetInput();    
}
function resetInput() {
    input.value = "";
}

function isValid(inputNumber) {
    const regex = /[^\da-z]/gi;
    const rawNum = inputNumber.replace(regex, "");
    const nums = rawNum.split("");
    const length = nums.length;
    const validNOCountryCode = 10;
    const validCountryCode = 11;
    let valid;
    let formattedNumber;

    if (length === validNOCountryCode) {
        valid = true;
        const n = convertLetters(nums);
        formattedNumber = `1 (${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
    }
    else if (length === validCountryCode) {
        const USCountryCode = "1";
        if (nums[0] === USCountryCode) {
            valid = true;
            const n = convertLetters(nums);
            formattedNumber = `${n[0]} (${n[1]}${n[2]}${n[3]}) ${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
        }
        else valid = false;
    }
    else valid = false;

    results.classList.remove("hidden");
    results.innerHTML += valid ? `<span class="valid">Valid</span> US Number: ${formatOutput ? formattedNumber : inputNumber}<br>
        <span class="original-input">Your Input: ${inputNumber}<span><br>`
        : `<span class="invalid">Invalid</span> US Number: ${inputNumber}<br>`;
}

function convertLetters(numLetterArray) {
    const digitRegex = /\d/gi;
    const charsRegex = /[a-z]/gi;
    const convertedArray = numLetterArray.slice().map(el => {
        if (el.match(digitRegex)){
            return el;
        } else {
            if (!el.match(charsRegex)){
                console.log(`Uh oh! ${el} is not a valid char and incorrectly passed the original cleaning regex!`);
                return "?";
            } else {
            }
            let isMatch = false;
            let index = null;
            conversionsArray.forEach((char, i) => {
                if (char[0] === el){
                    isMatch = true;
                    index = i;
                }
            })
            return isMatch ? conversionsArray[index][1] : el;
        }
    });
    return convertedArray;
}