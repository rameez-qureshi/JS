let actualPrice = document.querySelector("#Actualprice");
let collectedPrice = document.querySelector("#Collectedprice");
let progressContainer = document.querySelector("#progresscontainer");
let progressBar = document.querySelector("#progressbar");
let collectedPercentage = document.querySelector("#Collectedpercentage");
let remainingPercentage = document.querySelector("#Remainingpercentage");
let remianProgressBar = document.querySelector("#remainprogressbar");

let resultResult = document.getElementById('resultresult');
// let userInput = document.getElementById('userInput').value;
// resultResult.innerText = userInput;

let userInput = document.getElementById('userInput');
userInput.addEventListener('input', function () {
    let userInput = document.getElementById('userInput').value;
    collectedPrice.textContent = userInput;

    let total = actualPrice.innerText;
    let collected = collectedPrice.textContent;

    // console.log(total);

    let percentage =  collected / total * 100;
    percentage = Number.parseInt(percentage);

    collectedPercentage.innerText = `${percentage}%`;

    let remainPercen = 100 - percentage;
    remainingPercentage.innerText = `${remainPercen}%`;

    // console.log( typeof percentage);

    progressBar.style.width = `${percentage}%`;
    remianProgressBar.style.width = `${remainPercen}%`;

});

