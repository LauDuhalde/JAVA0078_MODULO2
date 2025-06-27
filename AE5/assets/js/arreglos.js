let userData = ["Lewis", "Hamilton", "l.hamilton@oficina.com"];
console.log("userData: "+userData);

userData.push("piloto"); //Agrega el elemento "piloto"
console.log("userData push: "+userData);
console.log("userData length: "+userData.length); // 4

userData.pop(); //Quita el último elemento
console.log("userData pop: "+userData);
console.log("userData length: "+userData.length); // 3

userData[3] = "Fotógrafo";
console.log("userData asignacion indice 3: "+userData); // ["Lewis", "Hamilton", "l.hamilton@oficina.com", "Fotógrafo"];

for (let i = 0; i < userData.length; i++) {
    console.log("userData["+i+"]: "+userData[i]);
}


