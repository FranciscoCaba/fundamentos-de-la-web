const secondsDiv = document.querySelector("#seconds");
const minutesDiv = document.querySelector("#minutes");
const hourDiv = document.querySelector("#hour");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}
    
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
    let hora = ((time/3600)%12)*30+180;
    let minuto = ((time%3600)/60)*6+180;
    let segundo = ((time%3600)%60)*6+180;
    
    hourDiv.style.transform = `rotate(${hora}deg)`;
    minutesDiv.style.transform = `rotate(${minuto}deg)`;
    secondsDiv.style.transform = `rotate(${segundo}deg)`;
}, 1000);
