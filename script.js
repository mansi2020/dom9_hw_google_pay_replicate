let inputText = document.querySelector("input");
let paymentButton = document.querySelector("#paymentButton");
let container = document.querySelector(".container");
let loader = document.querySelector(".loader");
console.log(container);
let pulseCircle  = document.querySelector(".wrapper");
inputText.addEventListener("input",(e)=>{
    console.log(inputText.value);
    paymentButton.innerText = `Pay ₹${inputText.value}`;
});


//click on payment button
paymentButton.addEventListener("click",()=>{
    // let myPromise = new Promise((res,rej)=>{
        
    // })
    container.style.display  = "none";
    loader.style.display = "block";
    setTimeout(()=>{
        loader.style.display = "none";
        pulseCircle.style.display = "block";
    },3000);
})