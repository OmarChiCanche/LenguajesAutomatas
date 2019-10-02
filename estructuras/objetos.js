const saludar =()=>{
    return "hola a todos";
}

let persona ={
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    peso: 60.5,
    hobbies:["musica", "futbol","Internet"],
    saludar
};

persona.apellido = "Perez Sosa";
console.log(persona.nombre + " " + persona.apellido);
console.log("edad\t" + persona.edad);
console.log("Peso\t" + persona.peso);
console.log("Hobbies\t" + persona.hobbies);
console.log(saludar());

//Arreglo de Objetos
let frutas =[
    {
        nombre: "Grosella",
        familia:"Saxifragaceas",
        calorias:29.3
    },
    {
        nombre: "limon",
        familia:"Rutaceas",
        calorias:38.2
    },
    {
        nombre: "Piña",
        familia:"Bromelaceas",
        calorias:50
    }
]

for (let i=0; i<frutas.length; i+=1){
    console.log("Fruta "+ (i+1)+"\t");
    console.log(frutas[i]);
}