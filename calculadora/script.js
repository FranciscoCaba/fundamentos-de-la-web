var displayDiv = document.querySelector("#display");
var value1 = 0;
var value2 = 0;
var operation = "";

function press(value){
    displayDiv.innerText += value;
}

function clr(){
    displayDiv.innerText = 0;
}

function setOP(newOP){
    operation = newOP;
}

function calculate(){
    
}