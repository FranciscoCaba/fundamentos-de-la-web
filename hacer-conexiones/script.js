var requestCount = 2;
var connectionCount = 418;
function addConnection(element) {
    var connectionCountElement = document.querySelector("#cantidad-conexiones");
    connectionCount++;
    connectionCountElement.innerText = connectionCount;
    var requestElement = document.querySelector("#solicitud-"+element.classList[1].substring(6));
    console.log(requestElement);
    requestElement.remove();
    decreaseRequestCount();
}
function denyConnection(element){
    var requestElement = document.querySelector("#solicitud-"+element.classList[1].substring(6));
    console.log(requestElement);
    requestElement.remove();
    decreaseRequestCount();
}
function editProfile() {
    var userName = document.querySelector("#user-name");
    userName.innerText = "Marcelo Argotti";
}
function decreaseRequestCount(){
    requestCount--;
    var connectionCountElement = document.querySelector("#cantidad-solicitudes");
    connectionCountElement.innerText = requestCount;
    if(requestCount==0){
        var requestListElement = document.querySelector(".lista-solicitudes");
        requestListElement.innerHTML = "<p>No requests found!</p>";
    }
}