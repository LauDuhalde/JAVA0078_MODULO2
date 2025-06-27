let hamburguesaClasica = {
    pan: "pan de hamburguesa",
    carne: "carne de res",
    queso: "cheddar",
    extras: ["lechuga", "tomate", "cebolla", "pepinillos"]
};
console.log("Hamburguesa clásica sin función: ")
console.log("Pan: " + hamburguesaClasica.pan);
console.log("Carne: " + hamburguesaClasica.carne);
console.log("Queso: " + hamburguesaClasica.queso);
console.log("Extras: " + hamburguesaClasica.extras);


hamburguesaClasica = {
    pan: "pan con semillas de sésamo",
    carne: "carne de res 100%",
    queso: "queso cheddar",
    extras: ["lechuga", "tomate", "cebolla", "salsa especial"],
    infoHamburguesa: function() {
        console.log("Hamburguesa clásica");
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
    }
}
hamburguesaClasica.infoHamburguesa();

let hamburguesaEspecial = {
    pan: "pan de hamburguesa",
    carne: "carne de res",
    queso: "queso americano",
    extras: ["lechuga", "tomate", "cebolla", "salsa especial"],
    infoHamburguesa: function() {
        console.log("Hamburguesa especial");
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
    }
}
hamburguesaEspecial.infoHamburguesa();
