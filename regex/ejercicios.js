//Ejercicio 1
console.log("Ejercicio 1");
let msg1 ="Lorem ipsuma doloa sia Mmea 'consectetua' adipiscing elit Mmam lacinia Mmpus erat ultricies finibus lacus";
let newMsg1 = msg1.replace(/[a-z]{7,}/g," + ");
console.log(newMsg1);

//Ejercicio dos
console.log("Ejercicio 2");
let newMsg2 = msg1.replace(/[^aeiouAEIOU]$/g," * ");
console.log(newMsg2);

//Ejercicio tres
console.log("Ejercicio 3");
let newMsg3 = msg1.replace(/[M][^aeiou][a-z]+/g, " - ");
console.log(newMsg3);

//Ejercicio cuatro
console.log("Ejercicio cuatro");
let newMsgcuatro = /["''"]/;
console.log(newMsgcuatro.test("Lorem ipsum dolor sit Mmet 'consectetur' tempus erat ultricies finibus lacus"));

//Ejercicio 5
console.log("Ejercicio 5");
let cinco = /(\s{1})(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/;
console.log(cinco.test("Mi direccion ip fija es 172.168.2.1"));

//Ejercicio 6
console.log("Ejercicio 6");
let seis = /(\s{1})(\d{1,2})[:](\d{1,2})/;
console.log(seis.test("la hora actual del servidor de Mexico es 12:30"));

//Ejercicio 7
console.log("Ejercicio 7");
let siete = /(\s{1})(\d{1,3})[-](\d{1,3})[-](\d{1,2})[-](\d{1,2})/;
console.log(siete.test("mi numero de telefono actual es 123-123-23-32 "));

//Ejercicio 8
console.log("Ejercicio 8");
let ocho = /(\s{1})(\w{1,})[@](\w{1,})[.](\w{1,})/; 
console.log(ocho.test("Mi correo electronico es Alexis1792@gmail.com"));

//Ejercicio 9
console.log("Ejercicio 9");
let nueve = /(^https?:\/\/[\w]+(\.[\w]+)+(\.[\w]+)?.*)/;
console.log(nueve.test("https://wwww.google.com/inicio/pag2"));

//Ejercicio 10
console.log("Ejercicio 10");
let diez = /(\s{1})(\d{5,5})(\s{1})/;
console.log(diez.test("mi codigo postal para los envios es 97508 "));