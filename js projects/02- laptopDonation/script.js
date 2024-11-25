let actualPrice = document.querySelector("#Actualprice");
let collectedPrice = document.querySelector("#Collectedprice");
let progressContainer = document.querySelector("#progresscontainer");
let progressBar = document.querySelector("#progressbar");
let collectedPercentage = document.querySelector("#Collectedpercentage");
let remainingPercentage = document.querySelector("#Remainingpercentage");
let remianProgressBar = document.querySelector("#remainprogressbar");

let total = actualPrice.innerText;
let collected = collectedPrice.innerText;

console.log(typeof total);

total = Number.parseInt(total);
collected = Number.parseInt(collected);

console.log(typeof total);

let percentage =  collected / total * 100;

collectedPercentage.innerText = `${percentage}%`;

let remainPercen = 100 - percentage;
remainingPercentage.innerText = `${remainPercen}%`;

console.log(percentage);

progressBar.style.width = `${percentage}%`;
remianProgressBar.style.width = `${remainPercen}%`;



