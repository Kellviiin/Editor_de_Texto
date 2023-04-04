const textArea = document.querySelector("textarea")

const font = document.querySelector(".font");
font.addEventListener("change", funcFont);
const bold = document.querySelector(".bold");
bold.addEventListener("click", funcBold);
const italic = document.querySelector(".italic");
italic.addEventListener("click", funcItalic);
const underlined = document.querySelector(".underlined");
underlined.addEventListener("click", funcUnderlined);
const left = document.querySelector(".left");
left.addEventListener("click", funcLeft);
const center = document.querySelector(".center");
center.addEventListener("click", funcCenter);
const right = document.querySelector(".right");
right.addEventListener("click", funcRight);
const color = document.querySelector(".color")
color.addEventListener("change", funcColor)

function funcFont(){
    textArea.style.fontSize=`${font.value}px`
}
function funcBold(){
    if(textArea.style.fontWeight == "bold"){
        textArea.style.fontWeight="lighter"; 
    }else{
        textArea.style.fontWeight="bold";
    }  
}
function funcItalic(){
    if(textArea.style.fontStyle =="italic"){
        textArea.style.fontStyle="normal";
    }else{
        textArea.style.fontStyle="italic"; 
    }
}
function funcUnderlined(){
    if(textArea.style.textDecoration == "underline"){
        textArea.style.textDecoration="none";
    }else{
        textArea.style.textDecoration="underline";
    }
}
function funcLeft(){
    textArea.style.textAlign="left";
}
function funcCenter(){
    textArea.style.textAlign="center";
}
function funcRight(){
    textArea.style.textAlign="right";
}
function funcColor(){
    textArea.style.color=`${color.value}`
}




