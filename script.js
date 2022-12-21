//Defining UI
const UIcelsius = document.querySelector('#result-celsius');
const UIfahrenheit = document.querySelector('#result-fahrenheit');
const UIkelvin = document.querySelector('#result-kelvin');
const UIinputValue = document.querySelector('#UIinputValue');
const UIinputValueUnit = document.querySelector('#UIinputValueUnit');

const jd = document.querySelector('#default');
const j0 = document.querySelector('#zero');
const j1 = document.querySelector('#one');
const j25 = document.querySelector('#twf');
const j35 = document.querySelector('#thf');
const j55 = document.querySelector('#fif');
const j100 = document.querySelector('#hundred');

        thf.style.display = 'none';
        twf.style.display = 'none';
        fif.style.display = 'none';
        zero.style.display = 'none';
        one.style.display = 'none';
        hundred.style.display = 'none';

//Defining Calculating elements
const calculateBtn = document.querySelector('.calculateBtn');
const temperatureUnit = document.querySelector('#tempUnit');

calculateBtn.addEventListener('click',calculateResult);
temperatureUnit.addEventListener('click',changeUIUnit);
function calculateResult(e){
    //getting the input value
    let inputNumber = parseInt(UIinputValue.value);

    //getting the values from option
    let optionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();

    if(optionValue == "select your desire temperature unit" || isNaN(inputNumber)){
       alert('Please Enter Both Number / Temperature Value');

    }else
        if(optionValue == "celsius"){
            celsius = inputNumber;
            fahrenheit = ((inputNumber * 9/5)+32).toFixed(2);
            kelvin = (inputNumber + 273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "fahrenheit"){
            celsius = ((inputNumber-32)*5/9).toFixed(2);
            fahrenheit = inputNumber;
            kelvin = (((inputNumber-32)*5/9)+273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "kelvin"){
            celsius = (inputNumber - 273.15).toFixed(2);
            fahrenheit = ((inputNumber - 273.15)*9/5 + 32).toFixed(2);
            kelvin = inputNumber;
            UIresultOutput();
        }
    e.preventDefault();
};

function changeUIUnit(){
    let UIoptionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();
        if(UIoptionValue == 'celsius'){
            UIinputValueUnit.innerHTML ='&deg;C';
        }
        if(UIoptionValue == 'fahrenheit'){
            UIinputValueUnit.innerHTML ='&deg;F';
        }
        if(UIoptionValue == 'kelvin'){
            UIinputValueUnit.innerHTML ='&deg;K';
        }
}

function UIresultOutput(){
    UIcelsius.value = celsius;
    UIfahrenheit.value = fahrenheit;
    UIkelvin.value = kelvin;
    if(celsius >= 100){
        j100.style.display = 'block';
        j55.style.display = 'none';
        j35.style.display = 'none';
        j25.style.display = 'none';
        jd.style.display = 'none';
        j0.style.display = 'none';
        j1.style.display = 'none';
    }
   else if(celsius >= 55  &&  celsius <= 99){
    j100.style.display = 'none';
    j55.style.display = 'block';
    j35.style.display = 'none';
    j25.style.display = 'none';
    jd.style.display = 'none';
    j0.style.display = 'none';
    j1.style.display = 'none';
    }
    else if(celsius >= 35  &&  celsius <= 54){
        j100.style.display = 'none';
        j55.style.display = 'none';
        j35.style.display = 'block';
        j25.style.display = 'none';
        jd.style.display = 'none';
        j0.style.display = 'none';
        j1.style.display = 'none';
        }
        else if(celsius >= 25  &&  celsius <= 34){
            j100.style.display = 'none';
            j55.style.display = 'none';
            j35.style.display = 'none';
            j25.style.display = 'block';
            jd.style.display = 'none';
            j0.style.display = 'none';
            j1.style.display = 'none';
            }

            else if(celsius >= 1  &&  celsius <= 24){
                j100.style.display = 'none';
                j55.style.display = 'none';
                j35.style.display = 'none';
                j25.style.display = 'none';
                jd.style.display = 'none';
                j0.style.display = 'none';
                j1.style.display = 'block';
                }
              else {
                j100.style.display = 'none';
                j55.style.display = 'none';
                j35.style.display = 'none';
                j25.style.display = 'none';
                jd.style.display = 'none';
                j0.style.display = 'block';
                j1.style.display = 'none';
    }

    //clear Input
    UIinputValue.value = '';
    UIinputValueUnit.value = '';

}    