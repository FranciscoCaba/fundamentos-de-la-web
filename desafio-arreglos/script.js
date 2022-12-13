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
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log("\nSegundo desafio:");
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    var prom = sum/arr.length;
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>prom) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log("\nTercer desafio:");
console.log(result); // esperamos 4 de vuelta
