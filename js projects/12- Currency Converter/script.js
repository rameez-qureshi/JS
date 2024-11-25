// const BASE_URL =
  // "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    // console.log(currCode, countryList[currCode]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangerate = async () => {
  let amount = document.querySelector("form input");
  let amtVal = parseFloat(amount.value);
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  // console.log(amtVal);

  // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  // let response = await fetch(URL);
  // let data = await response.json();
  // let rate = data[toCurr.value.toLowerCase()];

  // let finalAmount = amtVal * rate;
  // msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

  const fromCurrency = fromCurr.value;
  const toCurrency = toCurr.value;

  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = (amtVal * rate).toFixed(2);
    // console.log(amtVal * rate);

    msg.textContent = `${amtVal} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangerate();
});

window.addEventListener("load", () => {
  updateExchangerate();
});
