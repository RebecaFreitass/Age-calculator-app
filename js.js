
const  inputDay = document.querySelector(".input-day");
const  inputMonth = document.querySelector(".input-month");
const  inputYear = document.querySelector(".input-year");
const  submitBtn = document.querySelector(".btn")
const  outputDay = document.querySelector(".output-day");
const  outputMonth = document.querySelector(".output-month");
const  outputYear = document.querySelector(".output-year");
const  errorDay = document.querySelector(".error-day");
const  errorMonth = document.querySelector(".error-month");
const  errorYear = document.querySelector(".error-year");
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const form = document.querySelector("form");
const date = new Date();
const day = date.getDate();
const month = 1 + date.getMonth();
const year = date.getFullYear();

console.log(errorDay, errorMonth, errorYear)

console.log(inputDay, inputMonth, inputYear)

inputDay.addEventListener("input", function validateday() {
    if(inputDay.value > 31  ){
        errorDay.style.display = "block"
    }else{
        errorDay.style.display = "none"
    }
})
inputMonth.addEventListener("input", function validatemonth() {
    if(inputMonth.value > 12 ){
        errorMonth.style.display = "block"
    }else{
        errorMonth.style.display = "none"
    }
})
inputYear.addEventListener("input", function validateyear() {
    if(inputYear.value > year ){
        errorYear.style.display = "block"
    }else{
        errorYear.style.display = "none"
    }
})




