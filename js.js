
const  inputDay = document.querySelector(".input-day")
const  inputMonth = document.querySelector(".input-month")
const  inputYear = document.querySelector(".input-year")
const  submitBtn = document.querySelector(".btn")
const  outputDay = document.querySelector(".output-day");
const  outputMonth = document.querySelector(".output-month");
const  outputYear = document.querySelector(".output-year");
const  errorDay = document.querySelector(".error-day");
const  errorMonth = document.querySelector(".error-month");
const  errorYear = document.querySelector(".error-year");
const date = new Date();
const d2 = date.getDate();
const m2 = 1 + date.getMonth();
const y2 = date.getFullYear();
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



inputDay.addEventListener("input", function(){
    if(inputDay.value > 31  ){
        errorDay.style.display = "block"
    }else{
        errorDay.style.display = "none"
    }
})
inputMonth.addEventListener("input", function(){
    if(inputMonth.value > 12 ){
        errorMonth.style.display = "block"
    }else{
        errorMonth.style.display = "none"
    }
})
inputYear.addEventListener("input", function (){  
    if(inputYear > y2 ){
        errorYear.style.display = "block"
    }else{
        errorYear.style.display = "none"
    }
})
 function validate(){ 
    if(inputYear.value > y2){
        y2 = y2 - inputYear.value
        y2 = y2 + month[y2 - 1];
        m2 = m2 - 1;
    }
    if(inputMonth.value> m2){
        m2 = m2 + 12;
        y2 = y2 -1;
    }

    const d = d2 - inputDay.value;
    const m = m2 - inputMonth.value;
    const y = y2 - inputYear.value;

    outputDay.innerHTML = d , "roda";
    outputMonth.innerHTML = m, "roda";
    outputYear.innerHTML = y, "roda"
 }


 submitBtn.addEventListener("onclick", validate())