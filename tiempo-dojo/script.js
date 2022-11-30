var popupElement = document.querySelector(".cookie-popup");
var temperatureList = document.getElementsByClassName("temperature");
var temperatureMeasure = document.querySelector("#temperature-convertion").value;

function showPopup(){
    popupElement.style.visibility = "visible";
}

function hidePopup() {
    popupElement.style.visibility = "hidden";
}

function showAlert() {
    alert("Cargando informe meteorológico...");
}

function changeMeasures(element) {
    var i;
    temperatureMeasure = element.value;
    if (temperatureMeasure=="°C") {
        for(i = 0;i < temperatureList.length;i++){
            temperatureList[i].innerText = Math.round((temperatureList[i].innerText-32)*(5/9));
        }
    } else {
        for(i = 0;i < temperatureList.length;i++){
            temperatureList[i].innerText = Math.round((temperatureList[i].innerText*(9/5))+32);
        }
    }
}

setTimeout(showPopup,2000);