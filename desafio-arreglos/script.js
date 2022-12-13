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

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
