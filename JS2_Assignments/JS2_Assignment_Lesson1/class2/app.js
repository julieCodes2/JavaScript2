import {calculateCircumference, calculateArea, calculateSphereVolume} from './circleCalculator.js';
import {convertToNumber} from './validation.js';
import { outputToElement } from './display.js';

// can't use onclick on the button because modules create their own scope
//Modify app.js to use the following code instead of onclick
//document.querySelector('#submitButton').onclick = submitFunction;
//document.querySelector('#submitAreaButton').onclick = submitAreaFunction;
  document.querySelector('#submitButton').addEventListener("click", function() {
        submitFunction('circumference');
    }, false);
    document.querySelector('#submitButtonArea').addEventListener("click", function() {
        submitFunction('area');
    }, false);
      document.querySelector('#submitButtonVolume').addEventListener("click", function() {
        submitFunction('volume');
    }, false);
                
function submitFunction(calculationToMake) {
    let outputId = "output", inputId = "radius";
    if (calculationToMake === "area") {
        outputId += "Area";
        inputId += "Area";
} else if (calculationToMake === "volume") {
    outputId += "Volume";
        inputId += "Volume";
}
    let userRadius = convertToNumber(document.getElementById(inputId).value);
    //let outputElement = document.getElementById("output");
    // if(userRadius) {
    //     let circumference = calculateCircumference(userRadius)
    //     outputElement.innerHTML = `The circumference is ${circumference}!`;
    // } else {
    //     outputElement.innerHTML = "Please enter a valid number."
    // }
     if(!userRadius) {
       //output an error to the correct div 
       outputToElement(outputId, "Please enter a valid number.", "red");
    } else {
        //calculate area or circumference
        if (calculationToMake === "area") {
            outputToElement(outputId, `The area is ${calculateArea(userRadius)}!`);
        }
         else if (calculationToMake === "volume") {
            outputToElement(outputId, `The volume is ${calculateSphereVolume(userRadius)}!`);
        }else {
            outputToElement(outputId, `The circumference is ${calculateCircumference(userRadius)}!`);
        }
    }
}
//Delete the submitAreaFunction() from app.js
//I'll just hide it
// function submitAreaFunction() {
//     let userRadius = convertToNumber(document.getElementById("radiusForArea").value);
//     let outputElement = document.getElementById("outputArea");
//     if(userRadius) {
//         let area = calculateArea(userRadius)
//         outputElement.innerHTML = `The area is ${area}!`;
//     } else {
//         outputElement.innerHTML = "Please enter a valid number."
//     }
// }

