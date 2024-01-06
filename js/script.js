// import { SpeedInsights } from "@vercel/speed-insights/next";

let dOfBirth = document.querySelector("#form-box > input");
let buttonAge = document.getElementById("btn");

buttonAge.addEventListener("click", () => {
  let milli = new Date(dOfBirth.value);
  // console.log("milli", milli.getTime());

  let today = new Date();
  // console.log("today", today.getTime());

  const m1 = today - milli;
  const m2 = 365 * 24 * 60 * 60 * 1000;
  const finalNum = m1 / m2;

  // console.log(Math.floor(finalNum));
  let para = document.querySelector("p");
  para.innerText = `Your age is ${Math.floor(finalNum)} years old`;
});

//   buttonAge.addEventListener("mouseenter",()=>{
//   })
