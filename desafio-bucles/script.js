var impares = [];
console.log("Valores impares del 1 al 20:");
for(let i=1;i<=20;i+=2){
    impares.push(i);
}
console.log(...impares);



var divisibles3 = [];
console.log("\nValores divisibles entre 3 del 100 al 0:");
for(let i=99;i>0;i-=3){
    divisibles3.push(i);
}
console.log(...divisibles3);



var secuencia = [];
console.log("\nValores de la secuencia propuesta del 4 al -3.5:");
for (let i = 4; i > -4; i-=1.5) {
    secuencia.push(i);
}
console.log(...secuencia);



var sum = 0;
console.log("\nLa suma de los valores del 1 al 100 es:");
for (let i = 1; i <= 100; i++) {
    sum+=i;
}
console.log(sum);



var producto = 1;
console.log("\nEl factorial de 12 es:");
for (let i = 2; i <= 12; i++) {
    producto*=i;
}
console.log(producto);