const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const resultDisplay = document.getElementById("result");

// Fetch currency data
async function fetchCurrencies() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const currencies = Object.keys(data.rates);
    
    currencies.forEach(currency => {
        const optionFrom = document.createElement("option");
        const optionTo = document.createElement("option");
        
        optionFrom.value = currency;
        optionTo.value = currency;
        
        optionFrom.textContent = currency;
        optionTo.textContent = currency;
        
        fromCurrency.appendChild(optionFrom);
        toCurrency.appendChild(optionTo);
    });
}

// Convert currencies
async function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(amountInput.value);

    if (!amount) {
        resultDisplay.textContent = "Please enter a valid amount.";
        return;
    }

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await response.json();
    const rate = data.rates[to];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDisplay.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
}

// Initialize the app
fetchCurrencies();
convertBtn.addEventListener("click", convertCurrency);