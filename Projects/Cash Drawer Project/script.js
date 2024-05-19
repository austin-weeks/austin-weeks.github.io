const conversions = [
    //"NAME", value, isCoin, displayScale(opt)
    ["PENNY", 0.01, true, 0.7],
    ["NICKEL", 0.05, true, 0.8],
    ["DIME", 0.10, true, 0.65],
    ["QUARTER", 0.25, true, .9],
    ["ONE", 1.00, false],
    ["FIVE", 5.00, false],
    ["TEN", 10.00, false],
    ["TWENTY", 20.00, false],
    ["ONE HUNDRED", 100.00, false]
];

const purchaseBtn = document.getElementById("purchase-btn");
const itemPrice = document.getElementById("item-price");
const customerCash = document.getElementById("customer-cash");
const changeDue = document.getElementById("change-due");
const changeDueDiv = document.getElementById("change-display");
const priceText = document.getElementById("price");


function calculate() {
    const price = round(parseFloat(itemPrice.value));
    const cash = round(parseFloat(customerCash.value));
    customerCash.value = cash;
    itemPrice.value = price;
    changeDue.innerHTML = "";
    changeDueDiv.style.display = "block";

    if (!cash || !price) {
        changeDue.innerHTML = '<span class="red">Please enter an item price & customer change.</span>';
        return;
    }
    else if (cash < price) {
        changeDue.innerHTML = '<span class="red">Customer does not have enough money to purchase the item</span>';
        return;
    }
    else if (cash === price) {
        changeDue.innerHTML = '<span class="green">No change due - customer paid with exact cash</span>';
        return;
    }

    //Calculating Change Due
    let change = round(cash - price);
    const due = {};
    const conReversed = [...conversions].reverse();
    conReversed.forEach((el) => {
        const value = round(el[1]);

        while (change - value >= 0) {
            change = round(change - value);

            if (due[el[0]]) due[el[0]]++;
            else due[el[0]] = 1; 
        }
    });

    //Displaying Change Due
    for (const curr in due) {
        const conversion = conReversed.find(cvrsn => cvrsn[0] === curr);
        let amount, imgSrc, spanClass;
        //Coin
        if (conversion[2]) {
            imgSrc = "./coin-vertical-thin.svg"
            spanClass = "coin-value";
            amount = round(conReversed.find(cvrsn => cvrsn[0] === curr)[1] * 100) + "¢";
        }
        //Dollar
        else {
            imgSrc = "./money-thin.svg";
            spanClass = "dollar-value";
            amount = "$" + round(conReversed.find(cvrsn => cvrsn[0] === curr)[1]);
        }
        changeDue.innerHTML += `
        <div class="change-display">
            <div style="transform: scale(${conversion[3]});">
                <img class="change-icon" src="${imgSrc}">
                <span class="${spanClass}">${amount}</span>
            </div>
            <div class="quantity">${due[curr]}</div>
        </div>`;
    }
}


const round = num => parseFloat(num.toFixed(2));

purchaseBtn.addEventListener("click", calculate);
customerCash.addEventListener("keydown", e => {
    if (e.key === "Enter") calculate();
});
itemPrice.addEventListener("keydown", e => {
    if (e.key === "Enter") calculate();
});

changeDueDiv.style.display = "none";