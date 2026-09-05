
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);


        if(e.target.id === 'Yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
    });
});


// BMI Projects DOM Code Start From Here

const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

const calculateBtn =  document.querySelector('#calculateBtn');
const  resetBtn = document. querySelector('#resetBtn');

const result = document.querySelector('#result');

const bmiMessage = document.querySelector('#bmiMessage');
const bmiValue = document.querySelector('#bmiValue');




const toMeters = (cm) => cm / 100;

calculateBtn.addEventListener("click", function(){

    const heightInMeters = toMeters(height.value);

    const bmi = weight.value / (heightInMeters * heightInMeters);

        console.log("BMI:", bmi);



bmiValue.textContent = bmi.toFixed(2);

       bmiMessage.textContent = "";


bmiMessage.classList.remove(
    "text-blue-500",
    "text-green-500",
    "text-orange-500",
    "text-red-500"
);

if (bmi < 18.5) {
    bmiMessage.textContent = "You are Underweight";
    bmiMessage.classList.add("text-blue-500");
}
else if (bmi < 25) {
    bmiMessage.textContent = "You are Normal Weight";
    bmiMessage.classList.add("text-green-500");
}
else if (bmi < 30) {
    bmiMessage.textContent = "You are Overweight";
    bmiMessage.classList.add("text-orange-500");
}
else {
    bmiMessage.textContent = "You are Obese";
    bmiMessage.classList.add("text-red-500");
}
})


//Reset Button Functionality

resetBtn.addEventListener( "click",function(){

    height.value = "";
    weight.value = "";

    bmiValue.textContent = "";
    bmiMessage.textContent = "Enter Your  Height and Weight to Calculate BMI";
})