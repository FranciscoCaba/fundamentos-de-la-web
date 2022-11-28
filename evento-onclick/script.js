function removeElement(element){
    element.remove();
}
function changeText(element){
    // Queria desafiarme un poco e hice que cambiara entre ambos dependiendo del estado actual
    element.innerText=="Login"?(element.innerText="Logout"):(element.innerText="Login");
}
function sendAlert(element,message){
    // Hice que se vaya incrementando la cantidad de likes cuanto mas se apriete
    // De paso practico un poco de substring
    element.innerText = element.innerText.substring(0,element.innerText.length-6)/1+1+" likes";
    alert(message);
}