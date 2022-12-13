function pizzaOven(tipoCorteza, tipoSalsa, quesos, toppings) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella","feta"], ["champiñones", "aceitunas","cebollas"]);
var pizza3 = pizzaOven("lanzada a mano", "tradicional", ["cheddar"], ["bacon", "salchicha"]);
var pizza4 = pizzaOven("lanzada a mano", "tradicional", ["katupiri"], ["pollo", "palmito"]);
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);