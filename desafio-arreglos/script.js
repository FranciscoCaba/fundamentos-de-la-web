function siempreHambriento(arr) {
    var tieneHambre = true;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=="comida"){
            tieneHambre = false;
            console.log("delicioso");
        }
    }
    if(tieneHambre)
        console.log("Tengo hambre");
}

console.log("Primer desafio:");
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    // tu código aquí
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log("\nSegundo desafio:");
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
