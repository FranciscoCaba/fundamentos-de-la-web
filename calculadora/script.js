var displayDiv = document.querySelector("#display");
var value1 = 0;
var value2 = 0;
var newNumber = true;
var operation = "";

function press(value){
    if(newNumber){
        displayDiv.innerText = value;
        newNumber = false;
    }else{
        if(displayDiv.innerText.length < 8)
            displayDiv.innerText += value;
    }
}

function clr(){
    displayDiv.innerText = 0;
    value1 = 0;
    value2 = 0;
    newNumber = true;
}

function setOP(newOP){
    value1 = displayDiv.innerText;
    newNumber = true;
    operation = newOP;
}

function calculate(){
    value2 = displayDiv.innerText;
    if(operation == "*")
        displayDiv.innerText = value1 * value2;
    else if(operation == "+")
        displayDiv.innerText = value1 + value2;
    else if(operation == "/")
        displayDiv.innerText = value1 / value2;
    else if(operation == "-")
        displayDiv.innerText = value1 - value2;
    else
        alert("That operation doesnt exist!");
    num1 = displayDiv.innerText;
    operation = "";
    newNumber = true;
}