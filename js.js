
const  inputDay = document.querySelector(".input-day");
const  inputMonth = document.querySelector(".input-month");
const  inputYear = document.querySelector(".input-year");
const  submitBtn = document.querySelector(".icon-arrow")

const  outputDay = document.querySelector(".output-day");
const  outputMonth = document.querySelector(".output-month");
const  outputYear = document.querySelector(".output-year");

const  errorDay = document.querySelector(".error-day");
const  errorMonth = document.querySelector(".error-month");
const  errorYear = document.querySelector(".error-year");

const thisDate = new Date();
const thisYear = thisDate.getFullYear();

console.log(errorDay, errorMonth, errorYear)

console.log(inputDay, inputMonth, inputYear)

inputDay.addEventListener("input", function() {
    if(inputDay.value > 31  ){
        errorDay.style.display = "block"
    }else{
        errorDay.style.display = "none"
    }
})
inputMonth.addEventListener("input", function() {
    if(inputMonth.value > 12 ){
        errorMonth.style.display = "block"
    }else{
        errorMonth.style.display = "none"
    }
})
inputYear.addEventListener("input", function() {
    if(inputYear.value > thisYear ){
        errorYear.style.display = "block"
    }else{
        errorYear.style.display = "none"
    }
})

submitBtn.addEventListener("click", britday() )

function britday(){

}

