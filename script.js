const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");


const redValueSpan = document.getElementById("redValue");
const greenValueSpan = document.getElementById("greenValue");
const blueValueSpan = document.getElementById("blueValue");

const colorBox = document.getElementById("color-box");
const copyButton = document.getElementById("copybtn");
const inputTypeRGBValue = document.getElementById("inputType");

redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);

copyButton.addEventListener('click',copyRGBValue);


function updateColor(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
    colorBox.style.backgroundColor = rgbColor;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;

    inputTypeRGBValue.textContent = rgbColor;
}
 //updateColor();

function copyRGBValue(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

    navigator.clipboard.writeText(rgbColor).then(()=>{
        alert("RGB Color Value copied to Clipboard: "+ rgbColor);
    }).catch((error)=>{
        console.error("failed to copy RGB Values",error);
    });


}