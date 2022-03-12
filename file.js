const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const = document.querySelector(#);
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#yourBMI");

calculate.addEventListener("click" , ()=>{
    if(height.value != "" && weight.value != ""){
        let bmiValue = weight.value / (height.value * height.value)
        yourBMI.innerHTML = 'Your BMI Is : <span> ${bmiValue.toFixed(2)} </span>'
    }
    else
        {
            yourBMI.innerHTML = 'Please Enter Correct Value';
        }
});