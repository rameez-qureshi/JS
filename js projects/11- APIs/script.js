const URL = "https://catfact.ninja/fact?max_length=140";

let text = document.querySelector("#text");
let btn = document.querySelector("#btn");

let getFacts = async () => {
    // console.log("wait");
  let response = await fetch(URL);    // 1st promise give promise
//   console.log(response);
  let data = await response.json();   // 2nd promise give main text - JSON Format
//   console.log(data);
//   console.log(data.fact);
  text.innerText = data.fact;
};

// let getFactss = () => {                       // using PROMISE CHAINING
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data.fact);
//         text.innerText = data.fact;
//     });
// };

btn.addEventListener("click" , getFactss);


